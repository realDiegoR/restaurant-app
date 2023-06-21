import type { NextApiRequest, NextApiResponse } from 'next';

const users = [
	{
		id: 'abcd',
		fullName: 'Diego Reyes Cabrera',
		username: 'realdiegor',
		password: 'admin123',
	},
	{
		id: 'dcba',
		fullName: 'Daniel Andres Pirela',
		username: 'danielp',
		password: 'admin456',
	},
];

const login = async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req;
	const user = users.find((user) => user.username === body.username);
	const hasPermissions = user?.password === body.password;
	if (hasPermissions) {
		res.status(200).json(user);
	} else {
		res.status(401).json({
			statusCode: 401,
			message: 'user does not exist',
		});
	}
};

export default login;
