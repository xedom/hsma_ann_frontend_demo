<script lang="ts">
	import { env } from '$env/dynamic/public';

	const actionUrl = `${env.PUBLIC_API_URL}/auth/login`;
</script>

<div class="container">
	<form action={actionUrl} method="post">
		<h1>login</h1>
		<div class="field">
			<label for="username">username: </label>
			<input type="text" id="username" name="username" placeholder="username" /><br />
		</div>
		<div class="field">
			<label for="password">password: </label>
			<input type="password" id="password" name="password" placeholder="password" /><br />
		</div>
		<div class="link">
			<a href="/reset-password">reset your password</a>
		</div>
		<div>
			<button type="submit">login</button>
		</div>
	</form>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: 1rem;
	}

	form {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: 1rem;
		border-radius: 10px;
		background-color: #d5d5d5;
		/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
	}

	form h1 {
		margin: 0;
		text-transform: uppercase;
	}

	.field {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.field label {
		width: 100px;
	}

	.field input {
		flex: 1;
	}
</style>
