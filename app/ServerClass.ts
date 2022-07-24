import express, { Application } from 'express';
import address from 'address';

import IRoute from './interfaces/IRoute';

class App {
	public app: Application;
	public port: number;

	constructor(port: number, routes: IRoute[], globalMiddleware: any[]) {
		this.app = express();
		this.port = port;

		this.registerGlobalMiddleware(globalMiddleware);
		this.registerRoutes(routes);
		this.registerStaticDirectories();
	}

	private registerGlobalMiddleware(globalMiddleWares: any[]): void {
		globalMiddleWares.forEach((middleware) => {
			this.app.use(middleware);
		});
	}

	private registerRoutes(routes: IRoute[]): void {
		routes.forEach((route: IRoute) => {
			this.app.use(route.baseDir, route.router);
		});
	}

	private registerStaticDirectories(): void {
		this.app.use(express.static('public'));
	}

	public listen(): void {
		this.app.listen(this.port, () => {
			console.log(`Server started on port ${this.port}`);
			console.log(
				`Available on your local network at ${address.ip()}:${this.port}`
			);
		});
	}
}

export default App;
