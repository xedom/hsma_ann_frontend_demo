<script>
	import InputUpload from '$lib/components/InputUpload.svelte';
	import ProfilePic from '$lib/components/ProfilePic.svelte';
	import Toast, { ToastStatus, addToast } from '$lib/components/Toast.svelte';

	const handleClick = () => {
		addToast({
			description: 'description',
			status: ToastStatus.SUCCESS
		});
	};
</script>

<Toast />
<button on:click={handleClick}>Create Toast</button>

<hr />
<ProfilePic
	on:error={(e) => addToast({ description: e.detail.error, status: ToastStatus.ERROR })}
/>

<hr />
<InputUpload />
