<script lang="ts">
	export let username: string;
	export let picture: string;
	export let role: string;
</script>

<a class="userCard" href={`/users/${username}`}>
	<img src={picture} alt="User" />
	<div class="username">
		<h2>{username}</h2>
		<p>{role}</p>
	</div>
</a>

<style>
	a.userCard {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: inherit;
		padding-top: 10px;
	}

	a.userCard img {
		width: 120px;
		height: 120px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	}

	a.userCard .username {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
