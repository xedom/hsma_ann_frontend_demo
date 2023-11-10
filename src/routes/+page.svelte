<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { onMount } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import { env } from '$env/dynamic/public'


	const result = writable([]);
	let products: any[] = [];

	onMount(async () => {
		try {
			console.log(env.PUBLIC_API_URL)
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
	<header>
		<a href="/" class="menueMittig">home</a>
		<a href="" class="menueMittig">cart</a>
		<a href="" class="menueMittig">settings</a>
		<span id="rechtsPositionieren">
			<a id="username" href="./profile">username</a>
			<img src="/images/userProfilePicture.jpg" alt="User Profile Picture" class="userpicture" />
		</span>
	</header>

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
	* {
		background-color: #e5e5e5;
		font-family: Arial, Helvetica, sans-serif;
	}

	#divProducts {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	header {
		background-color: #ffffff;
		padding: 20px;
		padding-left: 200px;
		text-align: center;
		height: 40px;
	}
	a {
		background-color: #ffffff;
		text-decoration: none;
		color: #000000;
		font-size: 1.5em;
	}
	.menueMittig {
		margin: 15px;
		padding-left: 50px;
	}

	#rechtsPositionieren {
		float: right;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
	}

	#username {
		background-color: #ffffff;
	}

	.userpicture {
		margin-left: 20px;
		max-height: 40px;
		max-width: 40px;
		border-radius: 300px;
	}
</style>
