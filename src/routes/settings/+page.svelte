<script lang="ts">
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import { env } from '$env/dynamic/public';
	import type { SubmitFunction } from "@sveltejs/kit";

	export let data;
	export let form;

	console.log("form", form);

	const formActionUrl = `${env.PUBLIC_API_URL}/users/settings`;

	const userInfo = {
		username: 'giorge',
		email: 'giorge@shop.de',
		password: 'password',
		address: 'address'
	};

	const resHandle: SubmitFunction = async (input) => {
		console.log("input", input);

		return async (options) => {
			console.log("options", options);
			await options.update();
			
			console.log("options", options);
			console.log("page", $page);
		}
	};



</script>

<pre>{JSON.stringify($page, null, 2)}</pre>

<form class="container" action={formActionUrl} use:enhance method="POST" enctype="multipart/form-data">
	<div class="left">
		<img src="/images/userProfilePicture.jpg" alt="" />
		<input type="file" name="image" id="image" />
		<button>change image</button>
	</div>

	<div class="right">


		<label for="username">username</label>
		<input type="text" name="username" id="username" value={userInfo.username} />

		<label for="email">email</label>
		<input type="email" name="email" id="email" value={userInfo.email} />

		<label for="password">password</label>
		<input type="password" name="password" id="password" value={userInfo.password} />

		<label for="address">address</label>
		<input type="text" name="address" id="address" value={userInfo.address} />

		<button type="submit">Save</button>
	</div>
</form>

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
		gap: 1rem;
	}
</style>
