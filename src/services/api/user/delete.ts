import axios, { AxiosError } from 'axios';
import endPoints from '../endpoints';
import { UserId } from '@interfaces/user';

export const deleteUser = async (id: UserId) => {
	try {
		const response = await axios.delete(endPoints.userBase + id);
		return response.status;
	} catch (err) {
		//catch server error
		const error = err as AxiosError;
		throw error;
	}
};
