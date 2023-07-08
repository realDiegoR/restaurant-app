import axios, { type AxiosError, type AxiosResponse } from 'axios';
import endPoints from '../endpoints';

export interface ExpectedBody {
	username: string;
	password: string;
}

type Login = (requestBody: ExpectedBody) => Promise<AxiosResponse>;

export const login: Login = async (requestBody: ExpectedBody) => {
	try {
		const body = {
			...requestBody,
		};
		const response = await axios.post(endPoints.userLogin, body);
		return response;
	} catch (err) {
		//catch server errors
		const error = err as AxiosError;
		throw error.response ?? error;
	}
};
