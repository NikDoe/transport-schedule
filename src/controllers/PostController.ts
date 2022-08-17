import { NextFunction, Request, Response } from 'express';
import { Post } from '../models';
import { AppDataSource } from '../db';
import { ApiError } from '../errors/ApiError';

class PostController {
	async createPost(req: Request, res: Response, next: NextFunction) {
		const post = new Post();
		const { title, text, tags, views, imgUrl, userId } = req.body;
		post.title = title;
		post.text = text;
		post.tags = tags;
		post.views = views;
		post.imgUrl = imgUrl;
		post.user = userId;

		const postRepo = AppDataSource.getRepository(Post);
		const existPost = await postRepo.findOne({ where: { text } });

		if (existPost) {
			return next(ApiError.badRequest('пост с таким текстом уже есть'));
		}
		await postRepo.save(post);
		return res.json(post);
	}

	async getAllPosts(req: Request, res: Response) {
		res.send('все посты получены');
	}

	async getOnePost(req: Request, res: Response) {
		res.send('получен конкретный пост');
	}
}

export default new PostController();
