<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { user } = data;

	if (user === undefined) goto('/login');
</script>

{#if user}
	<slot />
{:else}
	<p>Protected route</p>
{/if}
