import type { FetchedUser, User, UserRole } from "$lib/types";
import { api_delete, api_get, api_put } from "./api";

export const apiGetLoggedUser = async (): Promise<User|undefined> => {
	try {
		const { _id: id, username, email, picture, role } = await api_get('/users/profile');
		return { id, username, email, picture, role } satisfies User;
	} catch {
		return undefined;
	}
};

export const apiGetUsers = async (): Promise<User[]> => {
	try {
		const users: FetchedUser[] = await api_get('/users');
		const mappedUsers = users.map(
			({ _id: id, username, email, picture, role }) => 
			({ id, username, email, picture, role } satisfies User)
		);
		return mappedUsers satisfies User[];
	} catch {
		return [];
	}
};

export const apiGetUser = async (username: string) => {
	return (await api_get(`/users/${username}`))[0];
};

export const apiGetUserByID = async (userID: string) => {
	return (await api_get(`/users/id/${userID}`));
};

export const apiDelecteUser = async (userID: string) => {
	return await api_delete(`/users/${userID}`);
};

export const apiDelecteUserBulk = async (userIDs: string[]) => {
	for (let userID of userIDs) await apiDelecteUser(userID);
};

export const apiSetUserRole = async (userID: string, role: UserRole) => {
	return await api_put(`/users/${userID}`, { role });
};

export const apiSetUsersRole = async (userIDs: string[], role: UserRole) => {
	for (let userID of userIDs) await apiSetUserRole(userID, role);
};
