<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import './globalstyle.css';
</script>

<svelte:head>
	<title>Shop</title>
</svelte:head>

<Toast />

<header>
	<Navbar />
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
		border-radius: 10px;
	}

	main {
		padding: 0 10px;
		border-radius: 10px;
		flex: 1;
		overflow-y: auto;
	}

	footer {
		padding: 10px;
		border-radius: 10px;
	}
</style>
