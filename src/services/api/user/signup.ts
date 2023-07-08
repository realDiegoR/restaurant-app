import axios, { AxiosError } from 'axios';
import endPoints from '../endpoints';

export type Body = {
	name: string;
	email: string;
	password: string;
};

export const signup = async (body: Body) => {
	try {
		const response = await axios.post(endPoints.userRegister, body);
		return response;
	} catch (err) {
		//catch server errors
		const error = err as AxiosError;
		throw error.response ?? error;
	}
};
