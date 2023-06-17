import type { NextApiRequest, NextApiResponse } from 'next';

const users = [
	{
		fullName: 'Diego Reyes Cabrera',
		username: 'realdiegor',
		password: 'admin123',
	},
];

const login = async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req;
	const formData = JSON.parse(body);
	const user = users.find((user) => user.username === formData.username);
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(400).json({
			statusCode: 400,
			message: 'user does not exist',
		});
	}
};

export default login;
