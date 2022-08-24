import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
} from 'typeorm';
import { Post } from './Post';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ length: 100 })
	fullName: string;
	@Column({ unique: true })
	email: string;
	@Column()
	password: string;
	@Column({ default: 'USER' })
	role: string;
	@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
	public createdAt: Date;
	@UpdateDateColumn({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP(6)',
		onUpdate: 'CURRENT_TIMESTAMP(6)',
	})
	public updatedAt: Date;

	@OneToMany(() => Post, post => post.user)
	posts: Post[];
}
