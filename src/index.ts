import express, { Request, Response } from 'express';

const app = express();
const PORT: number = 9001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('hi there :)');
});

app.post('/auth/login', (req: Request, res: Response) => {
	console.log(req.body);
	res.json({
		success: true,
	});
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
