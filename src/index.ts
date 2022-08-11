import 'dotenv/config';
import express from 'express';
import sequelize from './db';
import router from './router/router';

const app = express();
const PORT: string | number = process.env.PORT || 9001;

app.use(express.json());
app.use('/api', router);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();

		app.listen(PORT, () => {
			console.log(`listening on port ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
