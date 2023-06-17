import { useState, createContext, ReactNode, useContext } from 'react';

interface UserContext {
	isLogged: boolean;
	user: User | null;
	logIn: () => void;
	logOut: () => void;
}

enum USER_ROLES {
	admin = 'admin',
	customer = 'customer',
}

interface User {
	id: string;
	username: string;
	role: USER_ROLES;
	cart: ICartItem[];
}

const initialState: UserContext = {
	isLogged: false,
	user: null,
	logIn: () => undefined,
	logOut: () => undefined,
};

const UserContext = createContext<UserContext>(initialState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const user = useInternalUser();
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const useInternalUser = () => {
	const [user, setUser] = useState<User | null>(null);
	const [isLogged, setIsLogged] = useState<boolean>(false);

	const logIn = async () => {
		// setUser()
		setIsLogged(true);
	};

	const logOut = async () => {
		setUser(null);
		setIsLogged(false);
	};

	return {
		user,
		isLogged,
		logIn,
		logOut,
	};
};

export const useUserContext = () => {
	return useContext(UserContext);
};
