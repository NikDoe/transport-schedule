import { Router } from 'express';
import postController from '../controllers/PostController';

const postRouter = Router();

postRouter.post('/', postController.createPost);
postRouter.get('/', postController.getAllPosts);
postRouter.get('/:id', postController.getOnePost);

export default postRouter;
