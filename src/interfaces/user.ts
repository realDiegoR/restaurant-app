import { ICartItem } from './cart';

export enum USER_ROLES {
	admin = 'administrator',
	customer = 'customer',
}

export interface User {
	id: string;
	name: string;
	email: string;
	role: USER_ROLES;
	cart: ICartItem[];
}

export type UserId = Pick<User, 'id'>;
