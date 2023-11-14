<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { onMount } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import { env } from '$env/dynamic/public';

	const result = writable([]);
	let products: any[] = [];

	onMount(async () => {
		try {
			console.log(env.PUBLIC_API_URL);
			const response = await fetch(`${env.PUBLIC_API_URL}/products`);
			if (response.ok) {
				const data = await response.json();
				result.set(data);
				products = $result;
				console.log(products);
			} else {
				console.log('Fehler beim Abrufen der Daten');
			}
		} catch (error) {
			console.log('Fehler beim Abrufen der Daten:', error);
		}
	});
</script>

<html lang="de">
	<body>
		<div id="divProducts">
			{#each products as product}
				<ProductCard
					id={product._id}
					name={product.name}
					price={product.price}
					rating={product.rating}
					image={product.images[0] ?? 'https://picsum.photos/id/26/200/?blur=10'}
				/>
			{/each}
		</div>
	</body>

	<footer />
</html>

<style>
	#divProducts {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
