export class ApiError extends Error {
	constructor(public status: number, public message: string) {
		super();

		//if target in tsconfig is es5
		Object.setPrototypeOf(this, ApiError.prototype);
	}

	static forbidden(message: string): ApiError {
		return new ApiError(403, message);
	}

	static badRequest(message: string): ApiError {
		return new ApiError(404, message);
	}

	static internal(message: string): ApiError {
		return new ApiError(500, message);
	}
}
