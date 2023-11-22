<script>
	import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';

	goto(`${env.PUBLIC_API_URL}/auth/logout`);
</script>
