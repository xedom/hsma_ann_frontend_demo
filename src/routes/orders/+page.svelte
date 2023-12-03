<script lang="ts">
	import { apiGetOrders, apiGetProduct } from '$lib/api';
	import ProductListItemShort from '$lib/components/ProductListItemShort.svelte';
	import type { Order } from '$lib/types';
	import { parseDate, parseMoney } from '$lib/utils/parser';
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

		orderList = orders
			// @ts-ignore
			.map((order) => {
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
							image: itemInfo.value.images[0] || undefined
						};
					})
				};
			});

		orderList = orderList.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
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
		<div class="orderid">
			<div><b>Total price:</b> {parseMoney(order.total)}</div>
			<div><b>Date:</b> {parseDate(order.date)}</div>
			<div><b>Order ID:</b> {order._id}</div>
		</div>
		{#each order.items as product}
			<ProductListItemShort
				id={product.productID}
				name={product.name}
				price={product.price}
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
