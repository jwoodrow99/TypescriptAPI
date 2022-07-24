// import app from '../app/config/testServer';
import server from '../app/server';
import request from 'supertest';

describe('GET default WEB route', () => {
	it('Returns text when accessed.', async () => {
		const res = await request(server.app).get('/');
		expect(res.body.message).toEqual('Welcome to your TS Web App.');
		expect(res.statusCode).toEqual(200);
	});
});

describe('GET default API route', () => {
	it('Returns text when accessed.', async () => {
		const res = await request(server.app).get('/api');
		expect(res.body.message).toEqual('Welcome to your TS Web App. (API)');
		expect(res.statusCode).toEqual(200);
	});
});
