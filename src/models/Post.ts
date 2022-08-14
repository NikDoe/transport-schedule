import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
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
	@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
	public createdAt: Date;
	@UpdateDateColumn({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP(6)',
		onUpdate: 'CURRENT_TIMESTAMP(6)',
	})
	public updatedAt: Date;

	@ManyToOne(() => User, user => user.posts)
	user: User;
}
