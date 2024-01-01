import { env } from '$env/dynamic/public';

export const api_get = async (url: string) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'GET',
		credentials: 'include',
		mode: 'cors',
		headers: {
			contentType: 'application/json',
			// Authorization: `Bearer ${loggedUserToken}`
		}
	});
	const res = await response.json();

	if (response.status == 401) throw new Error('Unauthorized');
	if (response.status == 403) throw new Error('Forbidden');
	if (response.status != 200) throw new Error('Something went wrong');

	return res;
};

export const api_post = async (url: string, data: any) => {
	url = env.PUBLIC_API_URL + url;

	const response = await fetch(url, {
		method: 'POST',
		credentials: 'include',
		mode: 'cors',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
			// Authorization: `Bearer ${loggedUserToken}`
		},
		body: JSON.stringify(data)
	});
	const res = await response.json();

	if (response.status == 401) throw new Error('Unauthorized');
	if (response.status == 403) throw new Error('Forbidden');
	if (response.status != 200) throw new Error('Something went wrong');

	return res;
};

export const api_put = async (url: string, data: any) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'PUT',
		credentials: 'include',
		mode: 'cors',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
			// Authorization: `Bearer ${loggedUserToken}`
		},
		body: JSON.stringify(data)
	});
	const res = await response.json();

	if (response.status == 401) throw new Error('Unauthorized');
	if (response.status == 403) throw new Error('Forbidden');
	if (response.status != 200) throw new Error('Something went wrong');

	return res;
};

export const api_delete = async (url: string) => {
	url = env.PUBLIC_API_URL + url;
	const response = await fetch(url, {
		method: 'DELETE',
		credentials: 'include',
		mode: 'cors',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
			// Authorization: `Bearer ${loggedUserToken}`
		},
	});
	const res = await response.json();

	if (response.status == 401) throw new Error('Unauthorized');
	if (response.status == 403) throw new Error('Forbidden');
	if (response.status != 200) throw new Error('Something went wrong');

	return res;
};
