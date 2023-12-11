<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { onMount } from 'svelte';
	import { derived, writable, type Writable } from 'svelte/store';
	import { apiGetProducts } from '$lib/api/products';
	import type { Product } from '$lib/types';

	const products: Writable<Product[]> = writable([]);

	onMount(async () => {
		products.set(await apiGetProducts());
	});
</script>

<div id="divProducts">
	{#each $products as product}
		<ProductCard
			id={product._id}
			name={product.name}
			price={product.price}
			rating={product.rating}
			image={product.images[0]}
		/>
	{/each}
</div>

<style>
	#divProducts {
		align-self: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		/* padding: 0 200px; */
		gap: 10px;
	}
</style>
