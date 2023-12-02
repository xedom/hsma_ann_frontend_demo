<script lang="ts">
	import { onMount } from 'svelte';
	import { apiGetUsers } from '$lib/api';
	import type { User } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';

	const users: Writable<User[] | undefined> = writable(undefined);

	onMount(async () => {
		const fetchedUsers = await apiGetUsers();

		for (let user of fetchedUsers) {
			const { profilePic } = user;
			user.profilePic = profilePic ? `data:image/jpeg;base64,${profilePic}` : '/images/rect.png';
		}

		$users = fetchedUsers;
	});
</script>

<div class="container">
	{#if $users}
		{#each $users as user}
			<a class="userCard" href={`/users/${user.username}`}>
				<img src={user.profilePic} alt="User" />
				<div class="username">
					<h1>{user.username}</h1>
					<p>{user.email}</p>
				</div>
			</a>
		{/each}
	{:else}
		Loading...
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
