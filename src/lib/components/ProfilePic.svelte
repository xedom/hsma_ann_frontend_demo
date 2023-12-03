<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let name: string = 'image';
	export let image: string | undefined = undefined;

	interface $$Events {
		error: CustomEvent<{ error: string }>;
	}

	type File = {
		file: any;
		name: string;
		type: string;
		data: string;
		src: string;
	};

	let file = null as File | null;

	let allowedExtensions: RegExp = /\.(jpe?g|png|gif|bmp)$/i;
	let elem: HTMLInputElement | null = null;

	const dispatch = createEventDispatcher();
	const validateFile = (fPath: string) => !allowedExtensions.test(fPath) && 'Invalid file format';
	const click = () => elem?.click();

	function change(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target?.files) parseFiles(target.files);
	}

	function parseFiles(filelist: FileList) {
		let item = filelist[0];
		const error = validateFile(item.name);
		if (error) {
			dispatch('error', { error });
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(item);
		reader.onload = () => {
			file = {
				file: item,
				type: item.type,
				data: reader.result,
				src: URL.createObjectURL(item)
			} as File;
		};
	}
</script>

<input type="file" {name} id={name} on:change={change} bind:this={elem} />
<button class="image" type="button" on:click={click}>
	{#if file}
		<img src={file.src} alt="product" />
	{:else if image}
		<div class="empty">UPLOAD</div>
		<img src={`data:image/png;base64,${image}`} alt="product" />
	{:else}
		<div class="empty">UPLOAD</div>
	{/if}
</button>

<style>
	input[type='file'] {
		display: none;
	}

	button.image {
		border: none;
		padding: 0;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #464646;
		background-color: transparent;
		position: relative;
	}

	button.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.empty {
		position: absolute;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		font-size: 1rem;
		background: #000000aa;
		color: #fff;
	}
</style>
