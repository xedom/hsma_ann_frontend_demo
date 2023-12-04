<script lang="ts">
	import { onMount } from 'svelte';
	import { apiGetProducts } from '$lib/api';
	import type { ProductListItem } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';
	import ProductRow from '$lib/components/ProductRow.svelte';
	import ProductListItemShort from '$lib/components/ProductListItemShort.svelte';
	import Table from '$lib/components/Table.svelte';
	import { parseMoney } from '$lib/utils/parser';

	const products: Writable<ProductListItem[] | undefined> = writable(undefined);

	onMount(async () => {
		const fetchedProducts = await apiGetProducts();

		for (let product of fetchedProducts) {
			const { image } = product;
			product.image = image ? `data:image/jpeg;base64,${image}` : '/images/rect.png';
		}

		$products = fetchedProducts;
	});
</script>

<h1>Products</h1>
<hr />

<!-- <div class="actions">
	<button>Add product</button>
	<button>Edit</button>
	<button class="danger">Delete</button>
</div> -->

<div class="container">
	<br />
	{#if $products}
		<Table
			data={$products.map(({ name, price, images }) => ({
				name,
				price: parseMoney(price),
				image: images[0]
			}))}
		/>
		<!-- {#each $products as product}
			<ProductListItemShort
				id={product._id}
				name={product.name}
				price={product.price}
				image={product.images[0]}
			/>
		{/each} -->
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 10px 0;
	}
</style>
