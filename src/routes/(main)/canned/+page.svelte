<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	const markdown = `
# Canned Food

I eat a lot of canned foods as part of my normal diet. See below for some pictures of what I normally eat on a daily basis. There are some variations here and there based on the availability and cost of ingredients.

Why do this? It all started one winter (January 2022) when I got frustrated with having to go to the supermarket frequently during the cold NYC winters, and also having to throw out fresh produce that had gone bad if I didn't consume it quickly enough. After experimenting a bit with canned ingredients to replace certain fresh ingredients, I decided to make the jump to all canned ingredients.

I was a bit worried for my health at first. The whole idea of eating mostly canned foods just seemed unhealthy. After all, the food itself did not always look the most appetizing, having lost some of its color during the canning process. But I decided to keep at it, and for some time, I tweaked my recipes and experimented with new ingredients to try to make it healthier.

I also supplement my 3 meals with some fresh fruits throughout the day, and I make sure to get my daily vitamin C from these fresh fruits. The fruit selections vary based on the season and what is available at the local fruit stands near where I live. I prefer the local fruit stands because they are generally cheaper than grocery stores, and I find that they have more of the types of fruits that I like (like Mexican guavas and persimmons). Their fruit sometimes may not be considered "Grade-A", which is what usually ends up in grocery stores, they are perfectly nutritious and tasty.

At my first annual checkup after starting my canned food diet, I was concerned that perhaps my diet was causing some nutritional deficiencies, since I was not taking multivitamins. But to my surprise, my doctor did not notice any major issues.

I don't necessarily recommend eating exactly like I do. But it's worked decently well for me so far. Your mileage may vary. Maybe start with a few canned ingredients first to replace fresh ingredients, and then work your way up or down as appropriate.

---

<div>
	<h2 class="text-center">Breakfast</h2>
	<figure>
		<img src="/assets/breakfast-2.jpg" alt="" />
		<figcaption>
			Old-fashioned oats mixed with an egg, butter, mixed nuts, raw pumpkin seeds, canned pumpkin puree, chia seeds, sunflower seeds, hemp hearts, cinnamon, salt. Dried prunes, dried figs, whole milk greek yogurt, and coconut flakes added as a topping. Prepared with hot water kettle.
		</figcaption>
	</figure>
</div>

---

<div>
	<h2 class="text-center">Lunch</h2>
	<figure>
		<img src="/assets/canned-lunch2.jpg" alt="" />
		<figcaption>
			Canned chicken, canned salmon, canned black beans, canned corn, canned carrots, canned heart of palm, with a slice of colby jack cheese and ground black pepper for seasoning. Heated with microwave.
		</figcaption>
	</figure>
</div>

---

<div>
	<h2 class="text-center">Fresh Fruits</h2>
	<figure>
		<img src="/assets/fresh-fruits1.jpg" alt="" />
		<figcaption>
			I'm a big fan of Mexican guavas, persimmons, kiwis, and mandarins (for daily Vitamin C), and then I will usually alternate days between apples and some other fruit (in this photo, D'Anjou pears).
		</figcaption>
	</figure>
</div>

---

<div>
	<h2 class="text-center">Dinner</h2>
	<figure>
		<img src="/assets/canned-dinner.jpg" alt="" />
		<figcaption>
			Canned spinach, slice of pepperjack cheese, canned green beans, canned asparagus, canned diced tomato, canned mushrooms, canned green chilis, canned sardines, canned mackerel, hemp hearts, roasted pumpkin seeds, extra-virgin olive oil, ghost pepper (ground). Heated with microwave.
		</figcaption>
	</figure>
</div>
`;

	const lastUpdated = new Date('2024-03-12').toDateString();
</script>

<article class="prose">
	<SvelteMarkdown source={markdown} />
	<Footer {lastUpdated} />
</article>
