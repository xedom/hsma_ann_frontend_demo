<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Product, User } from '$lib/types';
	import { apiGetUser } from '$lib/api/users';
	import { apiGetProductByUser } from '$lib/api/products';

	const username = $page.params.username;
	let currentUser: User | undefined = undefined;

	let userProducts: Product[] = [];

	onMount(async () => {
		const user = await apiGetUser(username as string);
		currentUser = user;
		const products = await apiGetProductByUser(user._id);
		userProducts = products as Product[];
	});
</script>

<div class="container">
	<div class="picture">
		{#if currentUser?.picture}
			<img src={currentUser?.picture} alt="User Profile" />
		{/if}
	</div>
	<div class="right">
		<div class="username">
			<h1>{currentUser?.username}</h1>
			<p>{currentUser?.role}</p>
		</div>
		<h3>My Products</h3>
		<div class="products">
			{#if userProducts.length === 0}
				<p>No products</p>
			{/if}
			{#each userProducts as product}
				<ProductCard {...product} preview={product.images[0]} id={product.id} />
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		width: 1000px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
	}

	.username {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.username p {
		padding-left: 2px;
	}

	.picture {
		height: 300px;
		width: 300px;
		background-color: #222;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		margin-top: 0.5rem;
		overflow: hidden;
	}

	.picture img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.right {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.products {
		display: flex;
		flex-direction: row;
		gap: 20px;
		flex-wrap: wrap;
	}
</style>
