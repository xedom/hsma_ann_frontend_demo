<script lang="ts">
	import { apiGetOrders, apiGetProduct } from '$lib/api';
	import ProductListItem from '$lib/components/ProductListItem.svelte';
	import type { Order } from '$lib/types';
	import { onMount } from 'svelte';

	// @ts-ignore
	let orderList: Order[] = [];

	onMount(async () => {
		const orders = await apiGetOrders();

		// @ts-ignore
		const ids = orders.map((order) => order.items.map((item) => item.productID)).flat();
		const uniqueProductIDs = [...new Set(ids)];

		// @ts-ignore
		const fetchProductsInfo = uniqueProductIDs.map(apiGetProduct);
		const fetchedProductsInfo = await Promise.allSettled(fetchProductsInfo);

		if (fetchedProductsInfo.length == 0) return;

		// @ts-ignore
		orderList = orders.map((order) => {
			return {
				...order,
				// @ts-ignore
				items: order.items.map((item) => {
					const itemInfo = fetchedProductsInfo.find(
						// @ts-ignore
						(product) => product.value?._id === item.productID
					);

					return {
						...item,
						// @ts-ignore
						name: itemInfo.value.name || 'Product not found',
						// @ts-ignore
						price: itemInfo.value.price || 0,
						// @ts-ignore
						rating: itemInfo.value.rating || 0,
						// @ts-ignore
						image: itemInfo.value.images[0] || 'https://picsum.photos/id/26/200/?blur=10'
					};
				})
			};
		});
	});
</script>

<h1>Order history</h1>
<div class="products">
	{#if orderList.length === 0}
		<div class="empty">
			<p>You have no orders yet.</p>
			<a href="/">Go to products</a>
		</div>
	{/if}
	{#each orderList as order}
		<div class="orderid">Order ID {order._id}</div>
		{#each order.items as product}
			<ProductListItem
				editable={false}
				id={product.id}
				name={product.name}
				price={product.price}
				rating={product.rating}
				bind:quantity={product.quantity}
				image={product.image}
			/>
		{/each}
		<hr />
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		padding: 20px;
	}

	.empty {
		text-align: center;
		padding: 20px;
		background-color: #d5d5d5;
		border-radius: 10px;
	}

	.orderid {
		font-size: 20px;
		font-weight: bold;
		padding: 10px;
		text-align: right;
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
