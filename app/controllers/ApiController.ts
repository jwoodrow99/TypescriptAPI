import { Request, Response } from 'express';

class IndexController {
	static index(req: Request, res: Response): void {
		res
			.json({
				message: 'Welcome to your TS Web App. (API)',
			})
			.status(200);
	}
}

export default IndexController;
