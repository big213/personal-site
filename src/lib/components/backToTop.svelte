<script>
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>
	<button class="btn glass">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			><title>arrow-up-thick</title><path
				d="M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z"
			/></svg
		>
		Back to Top</button
	>
</div>

<style>
	.back-to-top {
		opacity: 1;
		transition:
			opacity 0.5s,
			visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
