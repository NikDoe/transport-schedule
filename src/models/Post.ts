import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Post {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column({ type: 'text', unique: true })
	text: string;
	@Column('simple-array')
	tags: string[];
	@Column()
	views: number;
	@Column()
	imgUrl: string;

	@ManyToOne(() => User, user => user.posts)
	user: User;
}
