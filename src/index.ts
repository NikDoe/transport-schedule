import 'dotenv/config';
import express from 'express';
import sequelize from './db';
import router from './router/router';
import { User, Post } from './models/models';

const app = express();
const PORT: string | number = process.env.PORT || 9001;

app.use(express.json());
app.use('/api', router);

const start = async () => {
	try {
		await sequelize.authenticate();
		await User.sync({ force: true });
		await Post.sync({ force: true });

		app.listen(PORT, () => {
			console.log(`сервер запущен на порту ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();

console.log(1);
