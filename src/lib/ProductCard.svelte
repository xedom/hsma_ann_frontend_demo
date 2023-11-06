<script lang="ts">
    export let id = '';
    export let name = '';
    export let price = '';
    export let rating = '';
    export let image = '';
</script>

<a class="card" href="/product?id={id}">
    <img src={image} alt="produktbild" draggable={false} />
    <div class="header">
        <div class="name">{name}</div>
        <div class="preis">{price} €</div>
    </div>
    <div class="footer">{rating}</div>
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

    .header {
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .footer {
        padding: 10px;
        text-align: center;
    }
</style>
