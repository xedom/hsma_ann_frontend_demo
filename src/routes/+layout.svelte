<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import type { LayoutData } from './$types';
	import './globalstyle.css';

	export let data: LayoutData;
	const { user } = data;
</script>

<svelte:head>
	<title>Shop</title>
</svelte:head>

<Toast />

<header>
	<Navbar {user} />
</header>

<main>
	<slot />
</main>

<footer>
	<Footer />
</footer>

<style>
	header {
		padding: 10px;
		border-radius: var(--radius);
	}

	main {
		padding: 0 10px;
		border-radius: var(--radius);
		flex: 1;
		overflow-y: auto;
	}

	footer {
		padding: 10px;
		border-radius: var(--radius);
	}
</style>
