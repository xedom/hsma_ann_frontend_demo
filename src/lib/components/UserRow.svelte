<script lang="ts">
	import type { User } from '$lib/types';

	let isSelecting = false;

	export let user: User;
</script>

{#if user}
	<div class="row">
		<input
			type="checkbox"
			name={`user-${user.username}`}
			id={`user-${user.username}`}
			bind:checked={isSelecting}
		/>
		<label for={`user-${user.username}`}>
			<div class="img">
				<img src={user.profilePic} alt="User" />
				{#if isSelecting}
					<div class="white" />
					<img class="done" src="/icons/done.svg" alt="Done" />
				{/if}
			</div>
			<div class="username">
				<a href={`/users/${user.username}`}>{user.username}</a>
				<p>{user.email}</p>
				<p>Role: {user.role}</p>
			</div>
		</label>
	</div>
{:else}
	Loading user...
{/if}

<style>
	.row {
		background-color: #eeeeee;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
		padding: 10px 15px;
		border-radius: var(--radius);
	}

	.row a {
		color: rgb(18, 127, 230);
		text-decoration: none;
	}

	.row p {
		font-weight: 600;
	}

	.row input {
		display: none;
	}

	.row label {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
	}

	.row .img {
		position: relative;
		overflow: hidden;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.row .img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.row .img .white {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #3fff95;
		opacity: 0.5;
	}

	.row .img .done {
		position: absolute;
		width: 70%;
		height: 70%;
	}
</style>
