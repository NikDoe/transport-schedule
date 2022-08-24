import bcrypt from 'bcrypt';
import { User } from '../models';
import { generateJWT, userRepo } from '../utils/utils';

class UserService {
	async registration(user: User, email: string) {
		if (!user.email || !user.password) {
			throw new Error('некорректный email или пароль');
		}

		const candidate = await userRepo.findOne({ where: { email } });

		if (candidate) {
			throw new Error('пользователь с таким email существует');
		}

		const hashPassword = await bcrypt.hash(user.password, 5);
		const newUser = await User.create({ ...user, password: hashPassword });
		await userRepo.save(newUser);
		return generateJWT(newUser.id, newUser.email, newUser.role);
	}

	async login(email: string, password: string) {
		const existUser = await userRepo.findOne({ where: { email } });
		if (!existUser) throw new Error('пользователя с таким email не существует');

		let comparePassword = bcrypt.compareSync(password, existUser.password);
		if (!comparePassword) throw new Error('неправильный пароль');

		return generateJWT(existUser.id, existUser.email, existUser.role);
	}
}

export default new UserService();
