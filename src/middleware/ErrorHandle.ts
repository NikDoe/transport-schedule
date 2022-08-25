import { ApiError } from '../errors/ApiError';
import { NextFunction, Request, Response } from 'express';

export function errorHandleMiddleware(
	error: ApiError,
	req: Request,
	res: Response,
	next: NextFunction,
): Response {
	if (error instanceof ApiError) return res.status(error.status).json({ message: error.message });
	return res.status(500).json({ message: 'непредвиденная ошибка' });
}
