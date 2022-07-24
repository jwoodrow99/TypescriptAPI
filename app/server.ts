import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import Server from './ServerClass';

import WebRoutes from './routes/WebRouter';
import ApiRoutes from './routes/ApiRouter';

dotenv.config();

const server = new Server(
	Number(process.env.PORT),
	[WebRoutes, ApiRoutes],

	[
		bodyParser.json(),
		bodyParser.urlencoded({ extended: true }),
		cookieParser(),
		cors(),
	]
);

export default server;
