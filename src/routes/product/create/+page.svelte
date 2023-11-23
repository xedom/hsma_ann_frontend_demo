<script lang="ts">
	import { goto } from '$app/navigation';
  import { apiCreateProduct } from '$lib/api';
	import ProfilePic from '$lib/components/ProfilePic.svelte';
	import { addToast } from '$lib/components/Toast.svelte';

  let name = '';
  let price = 0;

  async function createProduct(event: Event) {
    event.preventDefault();

    try {
      const res = await apiCreateProduct({ name, price });
      console.log(res);
      
      addToast({ description: 'Product created successfully' });
      goto('/product');
    } catch (error) {
      if (error instanceof Error)
      addToast({ description: error.message });
    }
  }

</script>

<h1>Create new product</h1>

<form on:submit|preventDefault={createProduct}>
  <div class="left">
    <label for="image">Image:</label>
    <ProfilePic name="image" on:error={() => {/* TODO */}} />
  </div>

  <div class="right">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" bind:value={name} />
  
    <label for="price">Price:</label>
    <input type="number" name="price" id="price" bind:value={price} />
  
    <label for="description">Description:</label>
    <textarea name="description" id="description"></textarea>
  
    <button type="submit">Create</button>
  </div>

</form>

<a href="/product">Back to list</a>

<style>
  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  form > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  form > div > label {
    margin-bottom: 10px;
  }

  form > div > input {
    margin-bottom: 10px;
  }

  form > div > textarea {
    margin-bottom: 10px;
  }

  form > div > button {
    margin-bottom: 10px;
  }
  
</style>