<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	const markdown = `
Hey, I'm James.

I live in Manhattan, New York City.

I spent my childhood in New Jersey and Westchester County, New York.

I went to NYU (Class of '14), where I majored in Finance, Statistics, and minored in Computer Science.

I sell Rubik's Cubes and related twisty puzzles for a living. I co-founded this business in 2011 while I was studying at NYU.

I can solve a Rubik's Cube in about 30 seconds.

I'm working on a few [side projects](/projects).

I'm an [angel investor](/angel-investing).

I eat mostly [canned foods](/canned).

I live in a [99-square-foot SRO](/apartment).
`;

	const lastUpdated = new Date('2024-03-12').toDateString();
</script>

<figure class="text-center">
	<div class="avatar">
		<div class="w-36 rounded">
			<img src="/assets/central-park1.jpg" alt="" />
		</div>
	</div>
</figure>
<article class="prose">
	<h1 class="text-center" style="margin-bottom: 10px">James Chang</h1>
	<h5 class="text-center">Entrepreneur, builder, angel investor</h5>
	<hr />
	<SvelteMarkdown source={markdown} />
	<Footer {lastUpdated} />
</article>
