<script lang="ts">
	import { onMount } from 'svelte';
	import { apiGetUsers } from '$lib/api/users';
	import type { UserCard as UserCardT } from '$lib/types';
	import UserCard from '$lib/components/UserCard.svelte';

	let users: UserCardT[] = [];

	onMount(async () => {
		const fetchedUsers = await apiGetUsers();

		const mappedUsers = fetchedUsers.map(({ username, picture, role }) => {
			// user.picture = picture ? `data:image/jpeg;base64,${picture}` : '/images/rect.png';
			return { username, picture: picture || '/images/rect.png', role };
		});

		users = mappedUsers;
	});
</script>

<div class="container">
	{#if !users} Loading... {/if}
	{#each users as user}
		<UserCard {...user} />
	{/each}
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
</style>
