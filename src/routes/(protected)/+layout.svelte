<script lang="ts">
	import { user } from '$lib/stores/users';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { apiGetLoggedUser } from '$lib/api/users';

	onMount(async () => {
		try {
			const data = await apiGetLoggedUser();
			$user = { ...data };
		} catch (e) {
			$user = undefined;
		}

		if ($user === undefined) goto('/login');
	});
</script>

<slot />
