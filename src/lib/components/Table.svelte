<script lang="ts">
	const headers = ['Name', 'Price', 'Image', 'Actions'];
	const rows = [
		['Product 1', '$10', 'image'],
		['Product 2', '$20', 'image'],
		['Product 3', '$30', 'image'],
		['Product 4', '$40', 'image'],
		['Product 5', '$50', 'image']
	];
	const canSelect = true;
</script>

<table>
	<thead>
		<tr>
			{#if canSelect}<th>#</th>{/if}
			{#each headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each rows as row}
			<tr>
				{#if canSelect}<td><input type="checkbox" /></td>{/if}
				{#each row as cell}
					<td>{cell}</td>
				{/each}
				<td>
					<button>Edit</button>
					<button>Delete</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-spacing: 0;
		border-collapse: separate;
		border-radius: 5px;
		overflow: hidden;
	}

	th,
	td {
		padding: 10px;
		overflow: hidden;
	}

	thead {
		background-color: #252525;
		color: #fff;
	}

	th {
		text-align: left;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
</style>
