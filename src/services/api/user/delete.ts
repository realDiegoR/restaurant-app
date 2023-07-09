import axios, { AxiosError } from 'axios';
import endPoints from '../endpoints';

export const deleteUser = async (id: string) => {
	try {
		const response = await axios.delete(endPoints.userDelete + id);
		return response.status;
	} catch (err) {
		//catch server error
		const error = err as AxiosError;
		throw error;
	}
};
