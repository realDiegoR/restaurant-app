import type { NextApiRequest, NextApiResponse } from 'next';
import users from 'src/database/users';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req;
	const user = users.find((user) => user.username === body.username);
	const hasPermissions = user?.password === body.password;
	if (user && hasPermissions) {
		const { id, fullName, username, role, cart } = user;
		const clientUser = {
			id,
			fullName,
			username,
			role,
			cart,
		};
		res.status(200).json(clientUser);
	} else {
		res.status(401).json({
			status: 401,
			message: 'Unauthorized access.',
		});
	}
};

export default login;
