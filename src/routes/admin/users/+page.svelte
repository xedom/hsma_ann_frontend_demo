<script lang="ts">
	import { onMount } from 'svelte';
	import { apiDelecteUserBulk, apiGetUsers, apiSetUsersRole } from '$lib/api/users';
	import type { User, UserRole } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';
	import UserRow from '$lib/components/UserRowCheckbox.svelte';
	import { addToast, ToastStatus } from '$lib/components/Toast.svelte';

	const users: Writable<User[] | undefined> = writable(undefined);

	let selectedUsers: string[] = [];
	let selectedCount = '';

	$: selectedCount = selectedUsers.length === 0 ? '' : `(${selectedUsers.length}) `;

	const handleAddUser = (e: CustomEvent<User>) => {
		selectedUsers = [...selectedUsers, e.detail.id];
	};

	const handleRemoveUser = (e: CustomEvent<User>) => {
		selectedUsers = selectedUsers.filter((id) => id !== e.detail.id);
	};

	const handleSetRole = async (role: UserRole) => {
		try {
			await apiSetUsersRole(selectedUsers, role);
			addToast({
				description: 'Users role changed successfully',
				status: ToastStatus.SUCCESS
			});

			if (!$users) return;
			$users = $users.map((user) => {
				if (!selectedUsers.includes(user.id)) return user;
				return { ...user, role };
			});
			selectedUsers = [];
		} catch (error) {
			addToast({
				description: 'Failed to change users role',
				status: ToastStatus.ERROR
			});
		}
	};

	const handleSetAdmin = async (e: Event) => handleSetRole('admin');
	const handleSetVendor = async (e: Event) => handleSetRole('vendor');
	const handleSetUser = async (e: Event) => handleSetRole('user');

	const handleDelete = async (e: Event) => {
		try {
			await apiDelecteUserBulk(selectedUsers);
			addToast({
				description: 'Users deleted successfully',
				status: ToastStatus.SUCCESS
			});

			if (!$users) return;
			$users = $users.filter((user) => !selectedUsers.includes(user.id));
			selectedUsers = [];
		} catch (error) {
			addToast({
				description: 'Failed to delete users',
				status: ToastStatus.ERROR
			});
		}
	};

	onMount(async () => {
		const fetchedUsers = await apiGetUsers();

		for (let user of fetchedUsers) {
			const { profilePic } = user;

			user.id = user._id;
			delete user._id;
			user.profilePic = profilePic || '/images/rect.png';
		}

		$users = fetchedUsers;
	});
</script>

<h1>Users</h1>
<hr />
<div class="actions">
	<button on:click={handleSetAdmin}>{selectedCount}Set as admin</button>
	<button on:click={handleSetVendor}>{selectedCount}Set as vendor</button>
	<button on:click={handleSetUser}>{selectedCount}Set as user</button>
	<button class="danger" on:click={handleDelete}>{selectedCount}Delete</button>
</div>

<div class="container">
	{#if $users}
		{#each $users as user}
			<UserRow on:add={handleAddUser} on:remove={handleRemoveUser} {user} />
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
