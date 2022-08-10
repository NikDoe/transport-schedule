import 'dotenv/config';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import sequelize from './db';

const app = express();
const PORT: string | number = process.env.PORT || 9001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('hi there :)');
});

app.post('/auth/login', (req: Request, res: Response) => {
	const token = jwt.sign(
		{
			email: req.body.email,
			nikName: 'NikDoe',
		},
		'qwe3226265qwe',
	);
	res.json({
		success: true,
		token,
	});
});

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

console.log(2);
