import type { UserRole } from "$lib/types";
import { api_delete, api_get, api_post, api_put } from "./api";

export const apiGetLoggedUser = async () => {
	return await api_get('/users/profile');
};

export const apiGetUsers = async () => {
	return await api_get('/users');
};

export const apiGetUser = async (username: string) => {
	return await api_get(`/users/${username}`);
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
