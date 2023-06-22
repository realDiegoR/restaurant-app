import { USER_ROLES, type User } from '@interfaces/user';

interface UserDB extends User {
	password: string;
}

const users: UserDB[] = [
	{
		id: 'abcd',
		fullName: 'Diego Reyes Cabrera',
		username: 'realdiegor',
		password: 'admin123',
		role: USER_ROLES.admin,
		cart: [],
	},
	{
		id: 'dcba',
		fullName: 'Daniel Andres Pirela',
		username: 'danielp',
		password: 'admin456',
		role: USER_ROLES.customer,
		cart: [],
	},
];

export default users;
