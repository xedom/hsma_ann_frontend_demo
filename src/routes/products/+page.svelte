<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { onMount } from 'svelte';
	import { apiGetProducts } from '$lib/api/products';
	import type { ProductCard as ProductCardT, Product } from '$lib/types';

	let products: Product[] = [];

	onMount(async () => {
		products = (await apiGetProducts()) satisfies ProductCardT[];
	});
</script>

<div id="divProducts">
	{#each products as product}
		<ProductCard {...product} />
	{/each}
</div>

<style>
	#divProducts {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100vw;
		max-width: 1000px;
		gap: 10px;
	}
</style>
