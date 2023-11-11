<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import type { SubmitFunction } from '@sveltejs/kit';
	import ProfilePic from '$lib/components/ProfilePic.svelte';
	import { ToastStatus, addToast } from '$lib/components/Toast.svelte';
	import { onMount } from 'svelte';

	let picImage = '';
	const formActionUrl = `${env.PUBLIC_API_URL}/users/settings`;
	let userInfo: { username: string; email: string; address: string } | undefined;

	const handlePicError = (e: CustomEvent<{ error: string }>) => {
		addToast({ description: e.detail.error, status: ToastStatus.ERROR });
	};

	const resHandle: SubmitFunction = async (input) => {
		console.log('input', input);

		return async (options) => {
			console.log('options', options);
			const res = options.result as unknown as {
				statusCode: number;
				image: string;
				message: string;
			};
			console.log('res', res);
			if (res.statusCode === 200) {
				addToast({ description: res.message, status: ToastStatus.SUCCESS });
				picImage = `data:image/jpeg;base64,${res.image}`;
			} else {
				addToast({ description: res.message, status: ToastStatus.ERROR });
			}
			await options.update({ reset: true });

			console.log('page', $page);
		};
	};

	onMount(async () => {
		const res = await fetch(`${env.PUBLIC_API_URL}/users/profile`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJyb2xlIjoidXNlciIsInN1YiI6IjY1NGFiYWVmMmNhMTI0NmFjMzlmY2EyZCIsImlhdCI6MTY5OTY4MTk4MCwiZXhwIjoxNjk5NjkyNzgwfQ.As0GXz-g4vTxiTaghPOYdwxsPtRi6Ty2ET0FVUD12Zo`
			}
		});

		const data = await res.json();

		if (res.status !== 200) {
			addToast({ description: data.message, status: ToastStatus.ERROR });
			return;
		}

		userInfo = {
			username: data.username,
			email: data.email,
			address: `${data.address.street}, ${data.address.city}, ${data.address.state}, ${data.address.country}`
		};
	});
</script>

<form
	class="container"
	use:enhance={resHandle}
	action={formActionUrl}
	method="POST"
	enctype="multipart/form-data"
>
	<div class="left">
		<ProfilePic name="image" on:error={handlePicError} />
		<h5>uploaded image preview:</h5>
		<img src={picImage} alt="" />
	</div>

	<div class="right">
		<div class="field">
			<label for="username">username</label>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="username"
				value={userInfo?.username ?? ''}
			/>
		</div>

		<div class="field">
			<label for="email">email</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="email"
				value={userInfo?.email ?? ''}
			/>
		</div>

		<div class="field">
			<label for="password">new password</label>
			<input type="password" name="password" id="password" placeholder="password" />
		</div>

		<div class="field">
			<label for="address">address</label>
			<input
				type="text"
				name="address"
				id="address"
				placeholder="address"
				value={userInfo?.address ?? ''}
			/>
		</div>

		<button type="submit">Save</button>
	</div>
</form>

<style>
	.container {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		max-width: 600px;
		padding: 1rem;
		gap: 1rem;
		border-radius: 0.5rem;
		background-color: #d5d5d5;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.left img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
		border: 1px dashed #464646;
	}

	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-end;
		gap: 1rem;
	}

	.field {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: 0.25rem;
	}
</style>
