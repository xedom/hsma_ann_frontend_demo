<script lang="ts">
	import { goto } from '$app/navigation';
	import { apiCreateProduct } from '$lib/api';
	import ProfilePic from '$lib/components/ProfilePic.svelte';
	import { addToast } from '$lib/components/Toast.svelte';

	let name = '';
	let price = 0;

	async function createProduct(event: Event) {
		event.preventDefault();

		try {
			const res = await apiCreateProduct({ name, price });

			addToast({ description: 'Product created successfully' });
			goto('/product');
		} catch (error) {
			if (error instanceof Error) addToast({ description: error.message });
		}
	}
</script>

<h1>Create new product</h1>

<form on:submit|preventDefault={createProduct}>
	<div class="left">
		<ProfilePic
			name="image"
			on:error={() => {
				/* TODO */
			}}
		/>
	</div>

	<div class="right">
		<div class="field">
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" bind:value={name} />
		</div>

		<div class="field">
			<label for="price">Price:</label>
			<input type="text" pattern="[0-9]*" name="price" id="price" bind:value={price} />
		</div>

		<div class="field">
			<label for="description">Description:</label>
			<textarea name="description" id="description" rows="5" />
		</div>

		<div class="buttons">
			<button type="submit">Create</button>
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

	form .left {
		display: flex;
		flex-direction: column;
		gap: 10px;
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
