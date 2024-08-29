<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import { error } from '@sveltejs/kit';
	import SvelteMarkdown from 'svelte-markdown';
	import { loading } from '$lib/stores/loading';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	if (!data.article) throw error(404);

	let imageUrl,
		imageLoading = false;

	/*
	onMount(() => {
		// fetch the image from the imageUrl
		(async function () {
			if (data.article.imageUrl) {
				imageLoading = true;
				const imageBlob = await fetch(data.article.imageUrl).then((res) => res.blob());

				imageUrl = window.URL.createObjectURL(imageBlob);

				imageLoading = false;
			}
		})();
	});
	*/
	let isFinishedLoading = false;

	$: updatedAt = new Date(data.article.updatedAt * 1000).toDateString();
	$: createdAt = new Date(data.article.createdAt * 1000).toDateString();
	// watch the $loading state, and switch isFinishedLoading based on that
	$: {
		isFinishedLoading = !$loading;
	}
</script>

<article class="prose">
	{#if isFinishedLoading}
		<figure>
			<img src={data.article.imageUrl} alt="" />
		</figure>
	{/if}
	<h1>{data.article.title}</h1>
	<SvelteMarkdown source={data.article.content} />
	<Footer {updatedAt} {createdAt} />
</article>
