<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import './globalstyle.css';
</script>

<Toast />

<header>
	<Navbar />
</header>

<main>
	<slot />
</main>
