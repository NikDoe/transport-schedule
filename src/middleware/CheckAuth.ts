import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function checkAuthMiddleware(req: Request, res: Response, next: NextFunction) {
	if (req.method === 'OPTIONS') next();
	try {
		const token = req.headers.authorization?.split(' ')[1];
		if (!token) return res.status(401).json({ message: 'вы не авторизованы' });
		req.user = jwt.verify(token, process.env.SECRET_KEY);
		next();
	} catch (e) {
		res.status(401).json({ message: 'вы не авторизованы' });
	}
}
