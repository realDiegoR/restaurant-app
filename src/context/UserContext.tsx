import type { User } from '@interfaces/user';
import { useState, createContext, ReactNode, useContext } from 'react';

interface UserContext {
	isLoggedIn: boolean;
	user: User | null;
	updateUserStatus: (user: User | null) => void;
}

const initialState: UserContext = {
	isLoggedIn: false,
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
	const [isLoggedIn, setIsLogged] = useState<boolean>(false);

	const updateUserStatus = (user: User | null) => {
		setUser(user);
		setIsLogged(Boolean(user));
	};

	return {
		user,
		isLoggedIn,
		updateUserStatus,
	};
};

export const useUserContext = () => {
	return useContext(UserContext);
};
