import { useState, createContext, ReactNode, useContext } from 'react';

interface UserContext {
	isLogged: boolean;
	user: User | null;
	updateUserStatus: (user: User | null) => void;
}

enum USER_ROLES {
	admin = 'admin',
	customer = 'customer',
}

interface User {
	id: string;
	fullName: string;
	username: string;
	role: USER_ROLES;
	cart: ICartItem[];
}

const initialState: UserContext = {
	isLogged: false,
	user: null,
	updateUserStatus: () => void 0,
};

const UserContext = createContext<UserContext>(initialState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const user = useInternalUser();
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const useInternalUser = () => {
	const [user, setUser] = useState<User | null>(null);
	const [isLogged, setIsLogged] = useState<boolean>(false);

	const updateUserStatus = (user: User | null) => {
		setUser(user);
		setIsLogged(Boolean(user));
	};

	return {
		user,
		isLogged,
		updateUserStatus,
	};
};

export const useUserContext = () => {
	return useContext(UserContext);
};
