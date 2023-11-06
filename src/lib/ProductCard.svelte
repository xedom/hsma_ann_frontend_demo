<script lang="ts">
    export let name = '';
    export let price = '';
    export let rating = '';
    export let image = '';
</script>

<div class="card">
    <img src={image} alt="produktbild" />
    <div class="header">
        <div class="name">{name}</div>
        <div class="preis">{price} €</div>
    </div>
    <div class="footer">{rating}</div>
</div>

<style>
    .card {
        background-color: #d9d9d9;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .card img {
        aspect-ratio: 1 / 1;
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
