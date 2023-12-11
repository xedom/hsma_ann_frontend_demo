<script>
	import { env } from '$env/dynamic/public';
	import { api_get } from '$lib/api/api';
	import { onMount } from 'svelte';

	onMount(async () => {
		// redirect to a different server to logout
		// await api_get(`/auth/logout`);
		window.location.href = `${env.PUBLIC_API_URL}/auth/logout`;
	});
</script>
