import type { UserRole } from "$lib/types";
import { api_get, api_post, api_put } from "./api";

export const apiGetLoggedUser = async () => {
	return await api_get('/users/profile');
};

export const apiGetUsers = async () => {
	return await api_get('/users');
};

export const apiGetUser = async (username: string) => {
	return await api_get(`/users/${username}`);
};

export const apiDelecteUserBulk = async (userIDs: string[]) => {
	return await api_post(`/users/delete`, { userIDs }); // TODO
};

export const apiSetUserRole = async (userID: string, role: UserRole) => {
	return await api_put(`/users/${userID}`, { role }); // TODO
};

export const apiSetUsersRole = async (userIDs: string[], role: UserRole) => {
	for (let userID of userIDs) {
		await apiSetUserRole(userID, role);
	}
};
