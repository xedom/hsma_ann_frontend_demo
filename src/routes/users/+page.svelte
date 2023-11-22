<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { apiGetUsers } from '$lib/api';
	import type { User } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';

	const username = $page.params.username;
	const users: Writable<User[] | undefined> = writable(undefined);

	let userProducts = [
		{ id: '1', name: 'Product 2', price: 10, image: 'https://picsum.photos/100' },
		{ id: '2', name: 'Product 2', price: 10, image: 'https://picsum.photos/200' },
		{ id: '3', name: 'Product 2', price: 10, image: 'https://picsum.photos/300' },
		{ id: '4', name: 'Product 2', price: 10, image: 'https://picsum.photos/400' },
		{ id: '5', name: 'Product 2', price: 10, image: 'https://picsum.photos/500' },
		{ id: '6', name: 'Product 2', price: 10, image: 'https://picsum.photos/600' },
		{ id: '7', name: 'Product 2', price: 10, image: 'https://picsum.photos/250' }
	];

	onMount(async () => {
		const fetchedUsers = await apiGetUsers();

		$users = fetchedUsers.map((user: User) => ({
			...user,
			profilePic: `data:image/jpeg;base64,${user.profilePic}`
		}));
	});
</script>

<div class="container">
	{#if $users === undefined}
		Loading...
	{:else}
		{#each $users as user}
			<a class="userCard" href={`/users/${user.username}`}>
				<img src={user.profilePic} alt="User" />
				<div class="username">
					<h1>{user.username}</h1>
					<p>{user.email}</p>
				</div>
			</a>
		{/each}
	{/if}
</div>

<style>
	.container {
		width: 1000px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 20px;
	}

	.userCard {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}

	.userCard img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}

	.userCard .username {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
