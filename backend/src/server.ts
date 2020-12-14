import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './router/routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
/* app.get('/', (request, response) => {
	console.log('ashaha');
	return response.json({ ok: true });
}); */
app.use(routes);
// mostra o url com a imagem
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => console.log('🔊Funfa'));
