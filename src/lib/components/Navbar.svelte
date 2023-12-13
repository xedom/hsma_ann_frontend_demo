<script lang="ts">
	import { apiGetLoggedUser } from '$lib/api/users';
	import { onMount } from 'svelte';
	import { addToast, ToastStatus } from './Toast.svelte';
	import { user } from '$lib/stores/users';

	const links = [
		{ name: 'home', href: '/', public: true },
		{ name: 'users', href: '/users', public: true },
		{ name: 'products', href: '/products', public: true },
		// { name: 'sell', href: '/products/sell', public: false },
		{ name: 'orders', href: '/orders', public: false },
		{ name: 'cart', href: '/cart', public: false },
		{ name: 'settings', href: '/settings', public: false }
	];

	$: isUserLoggedIn = $user !== undefined;

	onMount(async () => {
		try {
			const { profilePic, ...rest } = await apiGetLoggedUser();
			const pic = profilePic || '/images/rect.png';
			$user = { ...rest, profilePic: pic };
		} catch (e) {
			$user = undefined;
			// if (e instanceof Error)
			// 	return addToast({
			// 	title: 'User error',
			// 	description: e.message,
			// 	status: ToastStatus.ERROR
			// });

			// addToast({
			// 	title: 'User error',
			// 	description: 'Generic error',
			// 	status: ToastStatus.ERROR
			// });
		}
	});
</script>

<nav>
	<div class="left">
		{#each links as link}
			{#if link.public || isUserLoggedIn}
				<a href={link.href}>{link.name}</a>
			{/if}
		{/each}
	</div>
	<div class="right">
		{#if isUserLoggedIn && $user?.role === 'admin'}
			<!-- {#if isUserLoggedIn} -->
			<a href="/admin">admin</a>
		{/if}

		{#if !isUserLoggedIn}
			<a href="/login">login</a>
			<a href="/register">register</a>
		{:else}
			<a href="/logout">logout</a>
			<a id="username" href={`/users/${$user?.username}`}>
				<span>{$user?.username}</span>
				<img src={$user?.profilePic} alt="User Profile" class="userpicture" />
				<!-- <img alt="User Profile" class="userpicture" /> -->
			</a>
		{/if}
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: var(--radius);
		color: #000;
		height: 50px;
		padding: 0 1rem;
	}

	nav a {
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
		color: inherit;
		transition: color 0.2s ease-in-out;
	}

	nav a:hover {
		color: deepskyblue;
	}

	.left {
		flex: 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 2rem;
	}

	.right {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
	}

	.right .userpicture {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		object-fit: cover;
	}

	#username {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
