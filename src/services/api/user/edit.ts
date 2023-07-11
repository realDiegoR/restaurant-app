import axios, { AxiosError } from 'axios';
import endPoints from '../endpoints';
import { User } from '@interfaces/user';

type Body = Pick<User, 'id' | 'name' | 'email'>;

export const editUser = async (body: Body) => {
	try {
		const response = await axios.put(`${endPoints.userBase}${body.id}`, body);
		return response;
	} catch (err) {
		//catch server error
		const error = err as AxiosError;
		throw error;
	}
};
