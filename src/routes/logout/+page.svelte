<script>
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';

	onMount(() => {
		// redirect to a different server to logout
		window.location.href = `${env.PUBLIC_API_URL}/auth/logout`;
	});
</script>
