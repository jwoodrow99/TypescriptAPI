import express, { Request, Response, Router } from 'express';
import IRoute from '../interfaces/IRoute';

import ApiController from '../controllers/ApiController';

class ApiRoutes implements IRoute {
	public baseDir: string;
	public router: Router;

	constructor() {
		this.baseDir = '/api';
		this.router = express.Router();

		this.registerRoutes();
	}

	private registerRoutes(): void {
		this.router.get('/', ApiController.index);
	}
}

export default new ApiRoutes();
