<div class="container">
	<div class="sidebar">
		<a href="/admin">Dashboard</a>
		<a href="/admin/users">Users</a>
		<a href="/admin/products">Products</a>
	</div>

	<div class="content">
		<slot />
	</div>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.sidebar {
		width: 200px;
		background-color: #fff;
		border-radius: 10px;
		padding: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		display: flex;
		flex-direction: column;
	}

	.sidebar a {
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
		color: inherit;
		transition: color 0.2s ease-in-out;
		margin-bottom: 10px;
	}

	.sidebar a:hover {
		color: deepskyblue;
	}

	.content {
		flex: 1;
		padding: 10px;
		border-radius: 10px;
		background-color: #fff;
	}
</style>
