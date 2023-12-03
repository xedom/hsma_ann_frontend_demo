<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import {
		apiCheckoutCart,
		apiClearCart,
		apiGetCart,
		apiGetProduct,
		apiRemoveItemFromCart,
		apiUpdateItemInCart
	} from '$lib/api';
	import ProductListItem from '$lib/components/ProductListItem.svelte';
	import { ToastStatus, addToast } from '$lib/components/Toast.svelte';
	import { parseMoney } from '$lib/utils/parser';
	import { onMount } from 'svelte';

	type ResponseCartItem = { _id: string; productID: string; quantity: number };

	let totalCost = 0;

	let cartProducts: {
		id: string;
		itemID: string;
		name: string;
		price: number;
		quantity: number;
		rating: number;
		image: string;
	}[] = [];

	$: totalCost = cartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

	const removeProduct = async (itemID: string) => {
		try {
			const res = await apiRemoveItemFromCart(itemID);
			cartProducts = cartProducts.filter((product) => product.itemID !== itemID);
			addToast({ description: 'Product removed from cart', status: ToastStatus.SUCCESS });
		} catch (error) {
			if (error instanceof Error) {
				addToast({ description: error.message, status: ToastStatus.ERROR });
			}
		}
	};

	const updateProduct = async (id: string, quantity: number) => {
		try {
			quantity = parseInt(quantity.toString());
			const res = await apiUpdateItemInCart(id, quantity);

			// updating the quantity of the product in the cartProducts array
			// to avoid making another request to the server
			cartProducts = cartProducts.map((product) => {
				if (product.id.toString() === id) return { ...product, quantity };
				return product;
			});

			addToast({ description: 'Product updated', status: ToastStatus.SUCCESS });
		} catch (error) {
			if (error instanceof Error) {
				addToast({ description: error.message, status: ToastStatus.ERROR });
			}
		}
	};

	const onClear = async () => {
		try {
			await apiClearCart();

			addToast({ description: 'Cart cleared', status: ToastStatus.SUCCESS });
			cartProducts = [];

			await invalidateAll();
		} catch (error) {
			if (error instanceof Error) {
				addToast({ description: 'Failed to clear cart', status: ToastStatus.ERROR });
			}
		}
	};

	const onCheckout = async () => {
		try {
			await apiCheckoutCart();

			addToast({ description: 'Cart cleared', status: ToastStatus.SUCCESS });
			cartProducts = [];

			await invalidateAll();
		} catch (error) {
			if (error instanceof Error) {
				addToast({ description: 'Failed to clear cart', status: ToastStatus.ERROR });
			}
		}
	};

	onMount(async () => {
		const res = await apiGetCart();
		const { items: cartItems } = res;

		const uniqueProductIDs = [
			...new Set(cartItems.map((item: ResponseCartItem) => item.productID))
		];

		// @ts-ignore
		const fetchProductsInfo = uniqueProductIDs.map(apiGetProduct);

		const fetchedProductsInfo = await Promise.allSettled(fetchProductsInfo);

		if (fetchedProductsInfo.length == 0) return;

		cartProducts = cartItems.map((cartItem: ResponseCartItem) => {
			const productInfo = fetchedProductsInfo.find(
				// @ts-ignore
				(product) => product.value?._id === cartItem.productID
			);

			if (!productInfo || productInfo?.status === 'rejected')
				return {
					id: cartItem.productID,
					itemID: cartItem._id,
					name: 'Product not found',
					price: 0,
					quantity: cartItem.quantity,
					rating: 0,
					image: 'https://picsum.photos/id/26/200/?blur=10'
				};

			return {
				id: productInfo.value._id,
				itemID: cartItem._id,
				name: productInfo.value.name,
				price: productInfo.value.price,
				quantity: cartItem.quantity,
				rating: productInfo.value.rating,
				image: productInfo.value.images[0]
			};
		});
	});
</script>

<h1>Cart (Total cost: {parseMoney(totalCost)})</h1>
<div class="buttons">
	<button on:click={onClear}>Clear cart</button>
	<button on:click={onCheckout}>Checkout</button>
</div>
<div class="products">
	{#if cartProducts.length === 0}
		<div class="empty">
			<h2>Cart is empty</h2>
			<p>Go to the <a href="/">home page</a> to add products to your cart</p>
		</div>
	{/if}
	{#each cartProducts as product}
		<!-- {product.itemID} -->
		<ProductListItem
			on:remove={() => removeProduct(product.itemID)}
			on:save={(e) => updateProduct(product.itemID, e.detail)}
			id={product.id}
			name={product.name}
			price={product.price}
			rating={product.rating}
			bind:quantity={product.quantity}
			image={product.image}
		/>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		padding: 20px;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 10px;
		padding-bottom: 1rem;
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
