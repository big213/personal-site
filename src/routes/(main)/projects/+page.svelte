<script lang="ts">
	import Footer from '$lib/components/footer.svelte';

	import SvelteMarkdown from 'svelte-markdown';

	const markdown = `
# Projects

Here are some of the side projects I'm working on that I can share, in no particular order.

I enjoy building web applications, and I made a lot of the below projects simply wanted to try to build something cool. If you have an idea for a website, please feel free to [get in touch](/contact), and I would be more than happy to discuss!

* [j8g.com (this site)](https://j8g.com) - It's my personal website, and I use it to experiment with new web frameworks and features. Thanks for being a test subject.

* [OSRSRecords.com](https://osrsrecords.com) - Open source website for keeping track of records within the Old School RuneScape speedrunning community [Github Repository](https://github.com/big213/OSRSRecords)

* [CubePB.com](https://cubepb.com) - Open source website for keeping track of personal bests within the speedcubing community [Github Repository](https://github.com/big213/OSRSRecords)

* [GiraffeQL](https://www.npmjs.com/package/giraffeql) - Open source query language for APIs. Like GraphQL but in JSON. [Github Repository](https://github.com/big213/giraffeql)

* [Giraffeql Boilerplate](https://boilerplate.giraffeql.com) - An open source template for scaffolding web projects of all shapes and sizes. Uses Nuxt on the frontend and node.js on the backend. It serves as the scaffolding for many of my current websites. [Github Repository](https://github.com/big213/giraffeql-boilerplate)

* [CubingGG](https://app.cubing.gg) - An educational platform that helps you get faster at cubing by learning from world-class speedcubers.

* [Thingbase](https://thingbase.com) - A website to help you keep track of your things.
It is mostly production ready, but if you notice any bugs or issues, please let me know. If you intend to use it for anything serious, please also let me know beforehand.

* [Taskgram](https://taskgram.com) - A simple task management website app where you can organize tasks into workspaces and send tasks to yourself or to others. I developed this for myself and I use this extensively on a daily basis.
<br><br>
I wouldn't recommend using this for anything super critical, but it's mostly functional. Let me know if you have any bugs to report, or would like to request a feature.

* [Ozycon](https://ozycon.com) - A marketplace platform for indie video game creators and buyers. It works mostly fine but development has paused on this project.

* [SoloMeetups](https://solomeetups.com) - A platform that makes it easier to organize group activities that bring individuals together.
<br><br>
I basically wanted to create a site to help people host events and activities. Development has been suspended indefinitely on this project, but it should still mostly work.
`;

	const lastUpdated = new Date('2024-03-12').toDateString();
</script>

<article class="prose">
	<SvelteMarkdown source={markdown} />
	<Footer {lastUpdated} />
</article>
