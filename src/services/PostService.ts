import { Post } from '../models';
import { AppDataSource } from '../db';

const postRepo = AppDataSource.getRepository(Post);

class PostService {
	async createPost(post: Post, text: string) {
		const newPost = Post.create(post);

		const existPost = await postRepo.findOne({ where: { text } });

		if (existPost) {
			throw new Error('пост с таким текстом уже есть');
		}
		await postRepo.save(post);
		return newPost;
	}
}

export default new PostService();
