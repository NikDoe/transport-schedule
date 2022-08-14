import 'dotenv/config';
import express from 'express';
import router from './router/appRouter';
import { AppDataSource } from './db';

const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.json());
app.use('/api', router);

const start = async () => {
	try {
		await AppDataSource.initialize()
			.then(() => {
				console.log('база данных подключена');
			})
			.catch(error => console.log(error));

		await app.listen(PORT, () => {
			console.log(`сервер запущен на порту ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
