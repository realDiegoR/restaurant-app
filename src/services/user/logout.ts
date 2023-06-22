import axios from 'axios';
import endPoints from '../api';

export const logout = async () => {
	try {
		const response = await axios.post(endPoints.userLogout, { a: ' aa' });
		return response;
	} catch (err) {
		console.error(err);
	}
};
