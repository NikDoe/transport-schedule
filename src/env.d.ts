declare namespace NodeJS {
	export interface ProcessEnv {
		PORT: number;
		DB_NAME: string;
		DB_USER: string;
		DB_PASSWORD: string;
		DB_HOST: string;
		DB_PORT: number;
		SECRET_KEY: string;
	}
}

declare namespace Express {
	interface Request {
		user: string | JwtPayload;
	}
}
