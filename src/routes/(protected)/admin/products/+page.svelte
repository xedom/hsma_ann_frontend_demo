<script lang="ts">
	import { onMount } from 'svelte';
	import { apiGetProducts } from '$lib/api/products';
	import type { ProductListItem, ProductTableRow } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';
	import Table from '$lib/components/Table.svelte';
	import { parseMoney } from '$lib/utils/parser';

	let products: Writable<ProductTableRow[] | undefined> = writable(undefined);

	onMount(async () => {
		const fetchedProducts = (await apiGetProducts()) satisfies ProductListItem[];

		const mappedProducts = fetchedProducts.map(({ name, price, preview }) => ({
			name,
			price: parseMoney(price),
			image: preview || '/images/rect.png'
		}));

		$products = mappedProducts satisfies ProductTableRow[];
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
		<Table data={$products} />
		<!-- {#each $products as product}
			<ProductListItemShort {...product} />
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
