<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import { error } from '@sveltejs/kit';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;

	const recordData = data.article;

	if (!recordData) throw error(404);

	const updatedAt = new Date(recordData.updatedAt * 1000).toDateString();
	const createdAt = new Date(recordData.createdAt * 1000).toDateString();
</script>

{#if recordData.imageUrl}
	<figure class="text-center">
		<div class="avatar">
			<div class="w-36 rounded">
				<img src={recordData.imageUrl} alt="" />
			</div>
		</div>
	</figure>
{/if}
<article class="prose">
	<h1 class="text-center" style="margin-bottom: 10px">{recordData.title}</h1>
	<SvelteMarkdown source={recordData.content} />
	<Footer {updatedAt} {createdAt} />
</article>
