<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { user } = data;
	const isAdmin = user?.role === 'admin';

	if (!isAdmin) goto('/');
</script>

{#if isAdmin}
	<div class="container">
		<div class="sidebar">
			<a href="/admin">Dashboard</a>
			<a href="/admin/users">Users</a>
			<a href="/admin/products">Products</a>
		</div>

		<div class="content">
			<slot />
		</div>
	</div>
{:else}
	<p>Admin protected route</p>
{/if}

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.sidebar {
		width: 200px;
		background-color: #fff;
		border-radius: var(--radius);
		padding: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		display: flex;
		flex-direction: column;
	}

	.sidebar a {
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
		color: inherit;
		transition: color 0.2s ease-in-out;
		margin-bottom: 10px;
	}

	.sidebar a:hover {
		color: deepskyblue;
	}

	.content {
		flex: 1;
		padding: 10px;
		border-radius: var(--radius);
		background-color: #fff;
		overflow-y: auto;
	}
</style>
