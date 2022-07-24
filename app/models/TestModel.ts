import database from '../config/database';
import Bookshelf from 'bookshelf';

const bookshelf = Bookshelf(database);

class User extends bookshelf.Model {
	get tableName() {
		return 'users';
	}
}
