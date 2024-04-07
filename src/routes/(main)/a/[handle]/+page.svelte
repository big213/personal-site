<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import { error } from '@sveltejs/kit';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;

	if (!data.article) throw error(404);

	$: updatedAt = new Date(data.article.updatedAt * 1000).toDateString();
	$: createdAt = new Date(data.article.createdAt * 1000).toDateString();
</script>

<article class="prose">
	{#if data.article.imageUrl}
		<figure>
			<img src={data.article.imageUrl} alt="" />
		</figure>
	{/if}
	<h1>{data.article.title}</h1>
	<SvelteMarkdown source={data.article.content} />
	<Footer {updatedAt} {createdAt} />
</article>
