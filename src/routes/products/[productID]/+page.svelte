<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { parseMoney } from '$lib/utils/parser';
	import Rating from '$lib/components/Rating.svelte';
	import { ToastStatus, addToast } from '$lib/components/Toast.svelte';
	import { apiAddProductToCart } from '$lib/api/cart';
	import { apiGetProduct } from '$lib/api/products';

	const productID = $page.params.productID;
	// const productID = $page.url.searchParams.get('id');

	let quantity = 1;
	let bigImage = '';
	const changeBigImage = (image: string) => {
		bigImage = image;
	};

	let product = {
		name: '',
		description: '',
		price: 0,
		images: [],
		rating: 0
	};

	const handleAddToCart = async () => {
		try {
			await apiAddProductToCart(productID, quantity);

			addToast({ description: 'Product added to cart', status: ToastStatus.SUCCESS });
			quantity = 0;
		} catch (error) {
			if (error instanceof Error)
				addToast({ description: error.message, status: ToastStatus.ERROR });
		}
	};

	onMount(async () => {
		if (!productID) return;
		try {
			const data = await apiGetProduct(productID.toString());
			bigImage = data.images[0];
			product = data;
		} catch (e) {
			if (e instanceof Error) {
				addToast({ description: e.message, status: ToastStatus.ERROR });
			}
		}
	});
</script>

<div class="container">
	<div class="product">
		<div class="left">
			<img src={bigImage ?? 'https://picsum.photos/id/26/200/?blur=10'} alt="produktbild" />
			<div class="previews">
				{#each product.images as image}
					<button on:click={() => changeBigImage(image)}>
						<img src={image} alt="produktbild" />
					</button>
				{/each}
			</div>
		</div>
		<div class="right">
			<h1 class="title">{product.name.toUpperCase()}</h1>
			<div class="price"><b>Price:</b> {parseMoney(product.price)}</div>
			<div class="rating"><b>Rating:</b> <Rating rating={product.rating} /></div>
			<div class="button">
				<input
					bind:value={quantity}
					type="text"
					pattern="[0-9]*"
					name="quantity"
					id="quantity"
					placeholder="Quantity"
				/>
				<button on:click={handleAddToCart}>Add to cart</button>
			</div>
			<div class="description"><b>Description:</b> {product.description}</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.product {
		display: flex;
		padding: 10px;
		width: 100%;
		max-width: 900px;
	}

	.product .right {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-left: 20px;
	}

	.product .left {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.product .left img {
		width: 500px;

		aspect-ratio: 1/1;
		object-fit: cover;
		user-select: none;
		border-radius: var(--radius);
	}

	.product .left button {
		border: none;
		outline: none;
		padding: 0;
		margin: 0;
		background-color: transparent;
	}

	.product .left .previews {
		width: 500px;
		padding-bottom: 10px;
		display: flex;
		gap: 10px;
		overflow-x: auto;
	}

	.product .left .previews img {
		width: 100px;
		aspect-ratio: 1/1;
		object-fit: cover;
		user-select: none;
		border-radius: var(--radius);
	}
</style>
