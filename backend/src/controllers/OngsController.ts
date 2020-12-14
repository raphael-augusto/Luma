import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import * as Yup from 'yup';
import ongView from '../views/ongs_view';

import Ong from '../models/Ong';

interface ICreateOng {
	name: string;
	latitude: number;
	longitude: number;
	about: string;
	instructions: string;
	opening_hours: string;
	open_on_weekends: boolean;
	images: Array<{
		path: string;
	}>;
	phone: string;
	agency: string;
	account: string;
}

export default {
	// list all  ong's
	async index(request: Request, response: Response) {
		const ongRepository = getRepository(Ong);

		const ongs = await ongRepository.find({
			relations: ['images'],
		});

		return response.json(ongView.renderMany(ongs));
	},

	// list one ong
	async show(request: Request, response: Response) {
		const { id } = request.params;

		const ongRepository = getRepository(Ong);

		const ong = await ongRepository.findOneOrFail(id, {
			relations: ['images'],
		});

		// mostra tudo que está na view
		return response.json(ongView.render(ong));
	},

	// CREATE ONG'S
	async create(request: Request, response: Response) {
		const {
			name,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends,
			phone,
			agency,
			account,
		} = request.body;

		const ongRepository = getRepository(Ong);

		// hack para multiplos uploads de arquivos
		const requestImages = request.files as Express.Multer.File[];
		const images = requestImages.map((image) => {
			return { path: image.filename };
		});

		const data = <ICreateOng>{
			name,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends: open_on_weekends === 'true',
			images,
			phone,
			agency,
			account,
		};

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			latitude: Yup.number().required(),
			longitude: Yup.number().required(),
			about: Yup.string().required().max(300),
			instructions: Yup.string().required(),
			opening_hours: Yup.string().required(),
			open_on_weekends: Yup.boolean().required(),
			images: Yup.array(
				Yup.object().shape({
					path: Yup.string().required(),
				}),
			)
				.required()
				.min(1),
			phone: Yup.string().required(),
			agency: Yup.string().required(),
			account: Yup.string().required(),
		});

		await schema.validate(data, {
			abortEarly: false,
		});

		const ong = ongRepository.create(data);

		await ongRepository.save(ong);

		return response.status(201).json(ongView.render(ong));
	},
};
