import { NextFunction, Request, Response } from 'express';
import { Post } from '../models';
import { AppDataSource } from '../db';
import { ApiError } from '../errors/ApiError';

const postRepo = AppDataSource.getRepository(Post);

class PostController {
	async createPost(req: Request, res: Response, next: NextFunction) {
		const { title, text, tags, views, imgUrl, userId } = req.body;
		const post = Post.create({ title, text, tags, views, imgUrl, user: userId });

		const existPost = await postRepo.findOne({ where: { text } });

		if (existPost) {
			return next(ApiError.badRequest('пост с таким текстом уже есть'));
		}
		await postRepo.save(post);
		return res.json(post);
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
