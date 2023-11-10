<script lang="ts">
	import { parseMoney } from "$lib/utils/parser";

    export let id = '';
    export let name = '';
    export let price: number = 0;
    export let rating: number = 0;
    export let image = '';
</script>

<a class="card" href="/product?id={id}">
    <img src={image} alt="produktbild" draggable={false} />
    <div class="body">
        <div class="title">{name}</div>
        <div class="rating">
            {#each Array.from({ length: 5 }, (_, i) => i) as i}
                <span class="star" style="color: {i < rating ? 'orange' : 'gray'}">★</span>
            {/each}
            {rating}
        </div>
        <div class="preis">{parseMoney(price)}</div>
    </div>
</a>

<style>
    .card {
        background-color: #d9d9d9;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    .card img {
        max-width: 200px;
        aspect-ratio: 1/1;
        object-fit: cover;
        user-select: none;
    }

    .card .body {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }

    .card .body .title {
        font-weight: bold;
    }

</style>
