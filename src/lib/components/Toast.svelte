<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	export enum ToastStatus {
		SUCCESS = 'success',
		ERROR = 'error',
		WARNING = 'warning',
		INFO = 'info'
	}
	export type Toast = {
		id: string;
		title: string;
		description: string;
		duration: number;
		status: ToastStatus;
	};

	const defaultToast = {
		title: '',
		description: '',
		duration: 3000,
		status: ToastStatus.INFO
	};

	const toastStore = writable<Toast[]>([]);

	/**
	 * @param toast
	 * @param toast.title
	 * @param toast.description
	 * @param toast.duration
	 * @param toast.status
	 * @returns
	 * @example
	 * addToast({ description: 'Product created successfully' });
	 * addToast({ description: 'Product created successfully', status: ToastStatus.SUCCESS });
	 * addToast({ description: 'Product created successfully', status: ToastStatus.SUCCESS, duration: 5000 });
	 * addToast({ description: 'Product created successfully', status: ToastStatus.SUCCESS, duration: 5000, title: 'Product created' });
	 * addToast({ description: 'Product created successfully', status: ToastStatus.SUCCESS, duration: 5000, title: 'Product created', id: '123' });
	 *
	 */
	export const addToast = (toast: Partial<Toast>) => {
		const _toast = {
			...defaultToast,
			...toast,
			id: Math.random().toString(36).slice(2)
		};

		toastStore.update((toasts) => [...toasts, _toast]);

		setTimeout(() => {
			removeToast(_toast.id);
		}, _toast.duration);
	};

	export const removeToast = (id: string) => {
		toastStore.update((toasts) => toasts.filter((t) => t.id !== id));
	};
</script>

<div class="toast_container">
	{#each $toastStore as toast (toast.id)}
		<button
			class="toast {toast.status}"
			transition:fly={{ y: -100, duration: 300 }}
			on:click={() => removeToast(toast.id)}
		>
			{#if toast.title}
				<div class="title">{toast.title}</div>
			{/if}

			{#if toast.description}
				<div class="description">{toast.description}</div>
			{/if}
		</button>
	{/each}
</div>

<style>
	.toast_container {
		position: fixed;
		top: 65px;
		right: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 10px;
		padding: 10px;
	}

	.toast {
		border: none;
		border-radius: 5px;
		padding: 10px 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-end;
	}

	.toast .title {
		font-weight: 900;
		text-transform: uppercase;
	}

	.toast.success {
		background-color: #4caf50;
		color: #fff;
	}

	.toast.error {
		background-color: #f44336;
		color: #fff;
	}

	.toast.warning {
		background-color: #ff9800;
		color: #fff;
	}

	.toast.info {
		background-color: #2196f3;
		color: #fff;
	}
</style>
