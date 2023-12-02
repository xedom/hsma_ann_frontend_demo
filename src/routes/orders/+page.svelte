<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import {
		apiCheckoutCart,
		apiClearCart,
		apiGetCart,
		apiGetOrders,
		apiGetProduct,
		apiRemoveItemFromCart,
		apiUpdateItemInCart
	} from '$lib/api';
	import ProductListItem from '$lib/components/ProductListItem.svelte';
	import Rating from '$lib/components/Rating.svelte';
	import { ToastStatus, addToast } from '$lib/components/Toast.svelte';
	import { parseMoney } from '$lib/utils/parser';
	import { onMount } from 'svelte';
	import { parse } from 'svelte/compiler';

	// @ts-ignore
	let orderList = [];

	onMount(async () => {
		const res = await apiGetOrders();

		console.log(res);

		// @ts-ignore
		const ids = res.map((order) => order.items.map((item) => item.productID)).flat();

		const uniqueProductIDs = [...new Set(ids)];

		// @ts-ignore
		const fetchProductsInfo = uniqueProductIDs.map(apiGetProduct);
		const fetchedProductsInfo = await Promise.allSettled(fetchProductsInfo);

		if (fetchedProductsInfo.length == 0) return;

		// @ts-ignore
		orderList = res.map((order) => {
			const orderItems = order.items;
			const productInfo = fetchedProductsInfo.find(
				// @ts-ignore
				(product) => product.value?._id === orderItems.productID
			);

			if (!productInfo || productInfo?.status === 'rejected')
				return {
					...order,
					items: [
						...order.items,
						{
							id: order.productID,
							itemID: order._id,
							name: 'Product not found',
							price: 0,
							quantity: order.quantity,
							rating: 0,
							image: 'https://picsum.photos/id/26/200/?blur=10'
						}
					]
				};

			return {
				...order,
				items: [
					...order.items,
					{
						id: productInfo.value._id,
						itemID: order._id,
						name: productInfo.value.name,
						price: productInfo.value.price,
						quantity: order.quantity,
						rating: productInfo.value.rating,
						image: productInfo.value.images[0]
					}
				]
			};
		});

		console.log(orderList);
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
		{#each order.items as product}
			<!-- {product.itemID} -->
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

	.products {
		margin: 0 auto;
		width: 900px;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
