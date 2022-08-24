import { NextFunction, Request, Response } from 'express';
import { Post } from '../models';
import { AppDataSource } from '../db';
import { ApiError } from '../errors/ApiError';
import PostService from '../services/PostService';

const postRepo = AppDataSource.getRepository(Post);

class PostController {
	async createPost(req: Request, res: Response, next: NextFunction) {
		try {
			const post = await PostService.createPost(req.body, req.body.text);
			return res.json(post);
		} catch (e) {
			if (e instanceof Error) {
				return next(ApiError.badRequest(e.message));
			} else {
				console.log('непредвиденная ошибка', e);
			}
		}
	}

	async getAllPosts(req: Request, res: Response) {
		const posts = await postRepo.find();
		res.json(posts);
	}

	async getOnePost(req: Request, res: Response) {
		const id: string = req.params.id;
		const post = await postRepo.findOne({ where: { id: parseInt(id) } });
		res.json(post);
	}
}

export default new PostController();
