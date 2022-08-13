import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Post, User } from './models';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [User, Post],
	synchronize: true,
	logging: false,
});
