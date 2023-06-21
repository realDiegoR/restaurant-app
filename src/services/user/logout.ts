import axios from 'axios';
import endPoints from '../api';

export const logout = async () => {
	try {
		const response = await axios.post(endPoints.userLogout);
		return response;
	} catch (err) {
		console.error(err);
	}
};
