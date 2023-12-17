<script lang="ts">
	export let username: string = '';
	export let picture: string = '';
</script>

<a class="userchip" href="/users/{username}">
	<img src={picture} alt="User" class="userpicture" />
	<div class="username">{username}</div>
</a>

<style>
	.userchip {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
		text-decoration: none;
		color: inherit;
	}

	.userpicture {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		object-fit: cover;
	}

	.username {
		font-size: 1rem;
		font-weight: 500;
	}
</style>
