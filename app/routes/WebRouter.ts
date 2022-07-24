import express, { Request, Response, Router } from 'express';
import IRoute from '../interfaces/IRoute';

import WebController from '../controllers/WebController';

class ApiRoutes implements IRoute {
	public baseDir: string;
	public router: Router;

	constructor() {
		this.baseDir = '/';
		this.router = express.Router();

		this.registerRoutes();
	}

	private registerRoutes(): void {
		this.router.get('/', WebController.index);
	}
}

export default new ApiRoutes();
