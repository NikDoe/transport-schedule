import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('hi there');
});

export default router;
