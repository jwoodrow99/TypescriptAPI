import dotenv from 'dotenv';
dotenv.config();

import database from '../config/database';

const createUsersTable = database.schema.createTable(
	'users',
	function (table: any) {
		table.increments();
		table.string('name');
		table.timestamps();
	}
);

console.log(database);
// createUsersTable.
// console.log(createUsersTable.toString());
