<script lang="ts">
	import { onMount } from 'svelte';
	import { apiGetUsers } from '$lib/api/users';
	import type { User } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';

	const users: Writable<User[] | undefined> = writable(undefined);

	onMount(async () => {
		const fetchedUsers = await apiGetUsers();

		for (let user of fetchedUsers) {
			const { picture } = user;
			// user.picture = picture ? `data:image/jpeg;base64,${picture}` : '/images/rect.png';
			user.picture = picture || '/images/rect.png';
		}

		$users = fetchedUsers;
	});
</script>

<div class="container">
	{#if $users}
		{#each $users as user}
			<a class="userCard" href={`/users/${user.username}`}>
				<img src={user.picture} alt="User" />
				<div class="username">
					<h2>{user.username}</h2>
					<p>{user.role}</p>
				</div>
			</a>
		{/each}
	{:else}
		Loading...
	{/if}
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
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
		padding-top: 10px;
	}

	.userCard img {
		width: 120px;
		height: 120px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	}

	.userCard .username {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
