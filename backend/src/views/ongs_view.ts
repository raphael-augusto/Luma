import Ong from '../models/Ong';
import imagesView from './images_view';

// server para mostrar o que vai ser mostrado no frontend
export default {
	render(ong: Ong) {
		return {
			id: ong.id,
			name: ong.name,
			latitude: ong.latitude,
			longitude: ong.longitude,
			about: ong.about,
			instructions: ong.instructions,
			opening_hours: ong.opening_hours,
			open_on_weekends: ong.open_on_weekends,
			images: imagesView.renderMany(ong.images),
			phone: ong.phone,
			agency: ong.agency,
			account: ong.account,
		};
	},

	renderMany(ongs: Ong[]) {
		return ongs.map((ong) => this.render(ong));
	},
};
