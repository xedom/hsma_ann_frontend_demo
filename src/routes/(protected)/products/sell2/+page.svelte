<script lang="ts">
	import { goto } from '$app/navigation';
	import { apiCreateProduct } from '$lib/api/products';
	import { env } from '$env/dynamic/public';
	import Footer from '$lib/components/Footer.svelte';
	import ProfilePic from '$lib/components/ProfilePic.svelte';
	import { ToastStatus, addToast } from '$lib/components/Toast.svelte';
	import { onMount } from 'svelte';
	import { apiGetLoggedUser } from '$lib/api/users';
	import InputUpload from '$lib/components/InputUpload.svelte';

	const formActionUrl = `${env.PUBLIC_API_URL}/products`;

	// let userID: string | undefined = undefined;
	let name = '';
	let price = 0;
	let stock = 0;
	let description = '';

	async function createProduct(event: Event) {
		event.preventDefault();

		try {
			const res = await apiCreateProduct({ name, price, stock, description });

			addToast({ description: 'Product created successfully', status: ToastStatus.SUCCESS });
			// goto('/products');
		} catch (e) {
			if (e instanceof Error) addToast({ description: e.message, status: ToastStatus.ERROR });
		}
	}

	// onMount(async () => {
	// 	const res = await apiGetLoggedUser();
	// 	userID = res._id;
	// });
</script>

<h1>Create new product</h1>

<form action={formActionUrl} method="POST" enctype="multipart/form-data">
	<!-- <div class="left"> -->
	<!-- <ProfilePic
			name="image"
			on:error={() => {
				/* TODO */
			}}
		/> -->
	<!-- </div> -->

	<div class="right">
		<!-- <input type="hidden" name="userID" value={userID} /> -->
		<div class="buttons">
			<button type="submit">Create</button>
		</div>

		<div class="field">
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" />
		</div>

		<div class="row">
			<div class="field">
				<label for="price">Price (€):</label>
				<input type="text" pattern="[0-9]*(\.[0-9]+)?" name="price" id="price" />
			</div>

			<div class="field">
				<label for="stock">Stock:</label>
				<input type="text" pattern="[0-9]*" name="stock" id="stock" />
			</div>
		</div>

		<div class="field">
			<label for="description">Description:</label>
			<textarea name="description" id="description" rows="5" />
		</div>
		<div class="productImages">
			<InputUpload />
		</div>
	</div>
</form>

<!-- <a href="/product">Back to products</a> -->

<style>
	h1 {
		text-align: center;
		padding: 20px;
	}

	form {
		display: flex;
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
	}

	form .row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
		gap: 10px;
	}

	form .productImages {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	form .right {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		gap: 10px;
	}

	form .right .field {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	form .right .field textarea {
		resize: none;
	}

	form .buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: 10px;
	}
</style>
