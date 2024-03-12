<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	const markdown = `
# Apartment

Around the beginning of October 2023, I moved into a cozy 99 square foot SRO (Single Room Occupancy) apartment in lower Manhattan. The bathroom is shared with the entire floor, and is not included in the 99 square feet. There is a mini fridge and no stove in the apartment (but that's fine with me, since I [just use the microwave](/canned)).

After living in a 2 BR apartment with a roommate for 2 years, I was curious about trying out independent living. But the rents in lower Manhattan for a studio were quite high, so I began to seriously consider SROs.

Price was not the only factor. I was genuinely curious about the experience of living and working from a highly compact space. In theory, it seemed efficient. To get anywhere in a small apartment, you just need to walk a few steps.

So I took the jump! I've found that the small space forces me to find creative ways to optimize the space, and I'm forced to keep things tidy or I'll immediately suffer the consequences.

It's definitely an interesting space and building with its fair share of quirks, but I like it so far! Sometimes, less is more.
`;

	const lastUpdated = new Date('2023-12-11').toDateString();
</script>

<article class="prose">
	<SvelteMarkdown source={markdown} />
	<Footer {lastUpdated} />
</article>
