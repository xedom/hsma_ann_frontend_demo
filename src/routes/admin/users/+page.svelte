<script lang="ts">
	import { onMount } from 'svelte';
	import { apiGetUsers } from '$lib/api';
	import type { User } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';
	import UserRow from '$lib/components/UserRow.svelte';

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

<h1>Users</h1>
<hr />
<div class="actions">
	<button>Set as admin</button>
	<button>Set as vendor</button>
	<button>Set as user</button>
	<button class="danger">Delete</button>
</div>

<div class="container">
	{#if $users}
		{#each $users as user}
			<UserRow {user} />
		{/each}
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 10px 0;
	}
</style>
