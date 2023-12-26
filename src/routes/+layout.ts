export const ssr = false;

import { apiGetLoggedUser } from '$lib/api/users';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
  const user = await apiGetLoggedUser();

	return { user };
};
