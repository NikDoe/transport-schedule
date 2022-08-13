import sequelize from '../db';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	fullName: { type: DataTypes.STRING, allowNull: false },
	email: { type: DataTypes.STRING, unique: true, allowNull: false },
	password: { type: DataTypes.STRING, allowNull: false },
});

const Post = sequelize.define('post', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	text: { type: DataTypes.STRING, allowNull: false, unique: true },
	tags: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
	views: { type: DataTypes.INTEGER, defaultValue: 0 },
	imgUrl: { type: DataTypes.STRING },
});

User.hasMany(Post);
Post.belongsTo(User);

export { User, Post };
