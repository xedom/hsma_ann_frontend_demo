import { env } from '$env/dynamic/public';

const loggedUserToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthaiIsInJvbGUiOiJ1c2VyIiwic3ViIjoiNjU0ZjYzNDc0NTNhZWIyZDFlOTg0OGZkIiwiaWF0IjoxNjk5OTIxMjA5LCJleHAiOjE2OTk5MzIwMDl9.vXcZ2gvXRl6uxdhYREgjdhPNR-XDnkiTVD2YlBQhhKg';

export const api_get = async (url: string) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			contentType: 'application/json',
			Authorization: `Bearer ${loggedUserToken}`
		}
	});
	return await response.json();
};

export const api_post = async (url: string, data: any) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'POST',
		headers: { Authorization: `Bearer ${loggedUserToken}` },
		body: JSON.stringify(data)
	});
	return response.json();
};

export const api_put = async (url: string, data: any) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'PUT',
		headers: { Authorization: `Bearer ${loggedUserToken}` },
		body: JSON.stringify(data)
	});
	return response.json();
};

export const api_delete = async (url: string) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'DELETE',
		headers: { Authorization: `Bearer ${loggedUserToken}` }
	});
	return response.json();
};

export const apiGetLoggedUser = async () => {
	console.log('fetching apiGetLoggedUser');
	return await api_get('/users/profile');
};
