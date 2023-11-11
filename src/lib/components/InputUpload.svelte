<script lang="ts">
	import { writable } from 'svelte/store';

	let previewIndex = writable<number>(0);

	type FilesType = {
		file?: File;
		name?: string;
		type?: string;
		data: string;
		src?: string;
	};

	let files: FilesType[] = [
		{ data: 'https://picsum.photos/id/63/1000' },
		{ data: 'https://picsum.photos/id/96/1000' },
		{ data: 'https://picsum.photos/id/111/1000' },
		{ data: 'https://picsum.photos/id/250/1000' },
		{ data: 'https://picsum.photos/id/435/1000' },
		{ data: 'https://picsum.photos/id/486/1000' },
		{ data: 'https://picsum.photos/id/655/1000' },
		{ data: 'https://picsum.photos/id/912/1000' },
		{ data: 'https://picsum.photos/id/48/1000' },
		{ data: 'https://picsum.photos/id/23/1000' }
	];

	let multiple: boolean = true;
	let allowedExtensions: RegExp = /\.(jpe?g|png|gif|bmp)$/i;
	let elem: HTMLInputElement | null = null;

	const validateFile = (fPath: string) => allowedExtensions.test(fPath) && 'Invalid file format';
	const click = () => elem?.click();

	function parseFiles(filelist: FileList) {
		files = [];
		let items: Array<File> = [...filelist];
		if (!multiple) items = [items[0]];
		for (let file of [...items]) {
			const error = validateFile(file.name);
			if (error) console.log('invalidFormat', error);

			const reader = new FileReader();
			reader.addEventListener('load', () => {
				if (!multiple) files = [];
				files = [
					...files,
					{
						file,
						name: file.name,
						type: file.type,
						data: reader.result,
						src: URL.createObjectURL(file)
					} as FilesType
				];
			});
			reader.readAsDataURL(file);
		}
	}

	function setPreview(i: number) {
		console.log('setPreview', i);
		$previewIndex = i;
	}

	function change(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target?.files) parseFiles(target.files);
	}

	function remove(i: number) {
		files = files.filter((_, index) => index !== i);
	}
</script>

<input type="file" name="file" id="file" on:change={change} {multiple} bind:this={elem} />
<div class="images">
	{#each files as file, i}
		<div class="image-box">
			<div class="buttons">
				{#if i == $previewIndex}
					<button type="button" class="preview">PREVIEW</button>
				{:else}
					<button on:click={() => setPreview(i)}>SET PREVIEW</button>
				{/if}

				<button class="remove" on:click={() => remove(i)}>REMOVE</button>
			</div>
			<img src={file.data} alt="product" />
		</div>
	{/each}
	<button class="image-box" on:click={click}>UPLOAD</button>
</div>

<style>
	input[type='file'] {
		display: none;
	}

	button {
		border: none;
		border-radius: 5px;
		padding: 0.25rem 0.5rem;
		box-shadow: 0 0 0.25rem #00000055;
	}

	.images {
		border-radius: 5px;
		border: dashed 0.15rem #b5b5b5;
		max-width: 700px;
		background-color: #e5e5e5;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;
	}

	.image-box {
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 5px;
		box-shadow: 0 0 0.5rem #00000044;
		overflow: hidden;
	}

	.image-box .buttons {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
	}

	.remove {
		background-color: #ff1414;
	}

	.preview {
		background-color: #14ff7e;
		cursor: default;
	}

	.image-box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
