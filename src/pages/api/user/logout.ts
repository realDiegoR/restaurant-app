import type { NextApiRequest, NextApiResponse } from 'next';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
	setTimeout(() => {
		res.status(200).json({
			statusCode: 200,
			message: 'Logged out successfully',
		});
	}, 1000);
};

export default logout;
