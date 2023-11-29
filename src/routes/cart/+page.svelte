<script lang="ts">
	import ProductListItem from '$lib/components/ProductListItem.svelte';
	import { parseMoney } from '$lib/utils/parser';

	let totalCost = 0;

	let cartProducts = [
		{
			id: 1,
			name: 'Product 1',
			price: 100,
			quantity: 1,
			rating: 4,
			image: 'https://picsum.photos/id/26/200/?blur=10'
		},
		{
			id: 2,
			name: 'Product 2',
			price: 200,
			quantity: 1,
			rating: 3,
			image: 'https://picsum.photos/id/26/200/?blur=10'
		},
		{
			id: 3,
			name: 'Product 3',
			price: 300,
			quantity: 1,
			rating: 5,
			image: 'https://picsum.photos/id/26/200/?blur=10'
		},
		{
			id: 4,
			name: 'Product 4',
			price: 400,
			quantity: 1,
			rating: 2,
			image: 'https://picsum.photos/id/26/200/?blur=10'
		},
		{
			id: 5,
			name: 'Product 5',
			price: 500,
			quantity: 1,
			rating: 1
		}
	];

	$: totalCost = cartProducts.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

	const removeProduct = (id: string) => {
		cartProducts = cartProducts.filter((product) => product.id.toString() !== id);
	};

	const updateProduct = (id: string, quantity: number) => {
		cartProducts = cartProducts.map((product) => {
			if (product.id.toString() === id) return { ...product, quantity };
			return product;
		});
	};
</script>

<h1>Cart (Total cost: {parseMoney(totalCost)})</h1>
<div class="products">
	{#each cartProducts as product}
		<ProductListItem
			on:remove={() => removeProduct(product.id.toString())}
			on:update={(e) => updateProduct(product.id.toString(), e.detail)}
			id={product.id.toString()}
			name={product.name}
			price={product.price}
			rating={product.rating}
			image={product.image ?? 'https://picsum.photos/id/26/200/?blur=10'}
		/>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		padding: 20px;
	}
	.products {
		margin: 0 auto;
		width: 900px;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
