<script lang="ts">
	const userInfo = {
		username: 'giorge',
		email: 'giorge@shop.de',
		password: 'password',
		address: 'address'
	};
</script>

<div class="container">
	<div class="left">
		<img src="/images/userProfilePicture.jpg" alt="" />
		<button>change image</button>
	</div>

	<div class="right">
		<form action="">
			<label for="username">username</label>
			<input type="text" name="username" id="username" value={userInfo.username} />

			<label for="email">email</label>
			<input type="email" name="email" id="email" value={userInfo.email} />

			<label for="password">password</label>
			<input type="password" name="password" id="password" value={userInfo.password} />

			<label for="address">address</label>
			<input type="text" name="address" id="address" value={userInfo.address} />

			<button type="submit">save</button>
		</form>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.left img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
	}

	button {
		cursor: pointer;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.right form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
