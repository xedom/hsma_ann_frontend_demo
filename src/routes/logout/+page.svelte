<script>
	import { env } from '$env/dynamic/public';
	import { user } from '$lib/stores/users';
	import { onMount } from 'svelte';

	onMount(async () => {
		// redirect to a different server to logout
		// await api_get(`/auth/logout`);
		$user = undefined;
		window.location.href = `${env.PUBLIC_API_URL}/auth/logout`;
	});
</script>
