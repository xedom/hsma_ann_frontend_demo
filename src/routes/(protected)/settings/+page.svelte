<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import type { SubmitFunction } from '@sveltejs/kit';
	import ProfilePic from '$lib/components/ProfilePic.svelte';
	import { ToastStatus, addToast } from '$lib/components/Toast.svelte';
	import { onMount } from 'svelte';
	import { apiDelecteUser, apiGetLoggedUser } from '$lib/api/users';
	import { goto } from '$app/navigation';

	let picImage = '';
	const formActionUrl = `${env.PUBLIC_API_URL}/users/settings`;
	let userInfo:
		| {
				_id: string;
				username: string;
				picture: string | undefined;
				email: string;
				// address: string;
		  }
		| undefined;

	const handlePicError = (e: CustomEvent<{ error: string }>) => {
		addToast({ description: e.detail.error, status: ToastStatus.ERROR });
	};

	const handleDeleteAccount = async () => {
		if (!userInfo) return;
		try {
			await apiDelecteUser(userInfo._id);
			addToast({ description: 'User deleted successfully', status: ToastStatus.SUCCESS });
			goto('/login');
		} catch (e) {
			console.log('e', e);
			if (e instanceof Error) addToast({ description: e.message, status: ToastStatus.ERROR });
		}
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
				picImage = res.image;
			} else {
				addToast({ description: res.message, status: ToastStatus.ERROR });
			}
			await options.update({ reset: true });

			console.log('page', $page);
		};
	};

	onMount(async () => {
		try {
			const data = await apiGetLoggedUser();
			console.log('data', data);
			if (!data) return;
			userInfo = {
				_id: data.id,
				username: data.username,
				picture: data.picture,
				email: data.email
				// address: ''
			};
		} catch (e) {
			if (e instanceof Error) {
				addToast({ description: e.message, status: ToastStatus.ERROR });
			}
		}
	});
</script>

<h1>Settings</h1>
<form action={formActionUrl} method="POST" enctype="multipart/form-data">
	<div class="left">
		<ProfilePic name="image" image={userInfo?.picture} on:error={handlePicError} />
		<!-- <h5>uploaded image preview:</h5>
			<img src={picImage} alt="" /> -->
	</div>

	<div class="right">
		<div class="field">
			<label for="username">username</label>
			<input
				type="text"
				name="username"
				id="username"
				placeholder={userInfo?.username ?? 'username'}
			/>
		</div>

		<div class="field">
			<label for="email">email</label>
			<input type="email" name="email" id="email" placeholder={userInfo?.email ?? 'email'} />
		</div>

		<div class="field">
			<label for="password">password</label>
			<input type="password" name="password" id="password" placeholder="password" />
		</div>

		<div class="field">
			<label for="password">new password</label>
			<input type="password" name="newPassword" id="newPassword" placeholder="new password" />
		</div>

		<!-- <div class="field">
			<label for="address">address</label>
			<input type="text" name="address" id="address" placeholder={userInfo?.address ?? 'address'} />
		</div> -->

		<div class="buttons">
			<button type="button" class="danger" on:click={handleDeleteAccount}>Delete Account</button>
			<button type="submit">Save</button>
		</div>
	</div>
</form>

<style>
	h1 {
		text-align: center;
		padding: 20px;
	}

	form {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		max-width: 800px;
		padding: 2rem;
		gap: 2rem;
		border-radius: var(--radius);
		background-color: #d5d5d5;
		/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
	}

	form .left {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	form .right {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-end;
		gap: 1rem;
	}

	form .field {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: 0.25rem;
	}

	form .buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		gap: 0.5rem;
	}
</style>
