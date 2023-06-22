import type { NextApiRequest, NextApiResponse } from 'next';

function delay(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
	await delay(2000);
	res.status(200).json({
		statusCode: 200,
		message: 'Logged out successfully',
	});
};

export default logout;
