<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	const markdown = `
# Angel Investing

I started my angel investing journey in the summer of 2022. Before that, I had no idea what angel investing was.

Ever since I got into angel investing, I've deployed capital into quite a few early-stage startups in a wide variety of sectors, which I keep track of in an Excel spreadsheet. I also joined the [Hustle Fund Angel Squad](https://www.hustlefund.vc/squad), which was a great way to connect with other angel investors.

I consider myself sector agnostic, and I don't have a specific thesis that drives my decision, other than just having a lot of personal conviction that the startup could work out favorably in the long run. Being personally interested in the problem that is being solved is definitely a plus, as that is one of the main draws of angel investing to me.

I haven't experienced any major markups or exits yet, so far. But it's oftentimes a multi-year journey. I'm excited to follow along the journeys of the startups I've invested in.

If you would like to discuss a potential angel investment opportunity, please [get in touch](/contact) with me.
`;

	const lastUpdated = new Date('2024-03-12').toDateString();
</script>

<article class="prose">
	<SvelteMarkdown source={markdown} />
	<Footer {lastUpdated} />
</article>
