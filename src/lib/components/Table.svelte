<script lang="ts">
	// const headers = ['Name', 'Price', 'Image'];
	export let data: Record<string, string>[];
	// const rows = [
	// 	{ name: 'Product 1', price: '$10', images: 'image' },
	// 	{ name: 'Product 2', price: '$20', images: 'image' },
	// 	{ name: 'Product 3', price: '$30', images: 'image' },
	// 	{ name: 'Product 4', price: '$40', images: 'image' },
	// 	{ name: 'Product 5', price: '$50', images: 'image' }
	// ];
	const additionalActions = [
		{ name: 'Edit', class: '', action: () => console.log('Edit') },
		{ name: 'Delete', class: 'danger', action: () => console.log('Delete') }
	];

	const headers = Object.keys(data[0]).map((key) => key[0].toUpperCase() + key.slice(1));
	const canSelect = true;
</script>

<table>
	<colgroup>
		<col style="width: 20px;" />
		<col style="width: 100%;" />
		<col />
		<col />
		<col style="min-width: 169px;" />
	</colgroup>
	<thead>
		<tr>
			{#if canSelect}<th>#</th>{/if}
			{#each headers as header}
				<th>{header}</th>
			{/each}
			{#if additionalActions}<th class="col-actions">Actions</th>{/if}
		</tr>
	</thead>

	<tbody>
		{#each data as row}
			<tr>
				{#if canSelect}<td><input type="checkbox" /></td>{/if}
				{#each Object.entries(row) as value}
					{#if value[0] === 'image'}
						<td class={`col-${value[0]}`}>
							{#if value[1]}
								<img src={value[1]} alt="Product" />
							{:else}
								<img src="/images/rect.png" alt="Product" />
							{/if}
						</td>
					{:else}
						<td class={`col-${value[0]}`}>{value[1]}</td>
					{/if}
				{/each}

				{#if additionalActions}
					<td class="col-actions">
						{#each additionalActions as action}
							<button class={action.class} on:click={action.action}>{action.name}</button>
						{/each}
					</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-spacing: 0;
		border-collapse: separate;
		border-radius: var(--radius);
		overflow: hidden;
	}

	th,
	td {
		padding: 10px;
		overflow: hidden;
		text-align: left;
	}

	thead {
		background-color: #252525;
		color: #fff;
	}

	thead th.col-actions {
		text-align: center;
	}

	tbody td.col-actions {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	tbody td.col-image {
		text-align: center;
	}

	tbody td.col-image img {
		width: 30px;
		border-radius: 50%;
		aspect-ratio: 1/1;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
</style>
