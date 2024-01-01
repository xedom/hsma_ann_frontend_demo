<script lang="ts">
	export let username: string = '';
	export let picture: string = '';
</script>

<a class="userchip" href="/users/{username}">
	<div class="userpicture">
		{#if picture}
			<img src={picture} alt="User" />
		{/if}
	</div>
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
		background: #222;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		overflow: hidden;
	}

	.userpicture img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.username {
		font-size: 1rem;
		font-weight: 500;
	}
</style>
