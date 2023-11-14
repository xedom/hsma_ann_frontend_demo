<script lang="ts">
	import { apiGetLoggedUser } from '$lib/api';
	import type { User } from '$lib/types';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export const user: Writable<User> = writable({
		username: '',
		email: '',
		profilePic: '',
		role: ''
	});

	const links = [
		{ name: 'home', href: '/' },
		{ name: 'cart', href: '/cart' },
		{ name: 'settings', href: '/settings' }
	];

	onMount(async () => {
		user.set(await apiGetLoggedUser());
	});
</script>

<nav>
	<div class="left">
		{#each links as link}
			<a href={link.href}>{link.name}</a>
		{/each}
	</div>
	<div class="right">
		<a id="username" href="./profile">{$user.username}</a>
		<img
			src={$user.profilePic || '/images/userProfilePicture.jpg'}
			alt="User Profile"
			class="userpicture"
		/>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		padding: 0 1rem;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding: 0.5rem;
		border-radius: 10px;
		color: #000;
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
		justify-content: center;
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
</style>
