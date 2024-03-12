<script lang="ts">
	import './styles.css';
	import BackToTop from '$lib/components/backToTop.svelte';
	import { onMount } from 'svelte';

	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});

	type NavItem = {
		text: string;
		path?: string | null;
		children?: NavItem[];
	};

	const navArray: NavItem[] = [
		{ text: 'Home', path: '/' },
		{ text: 'Projects', path: '/projects' },
		{ text: 'Angel Investing', path: '/angel-investing' },
		{ text: 'Canned Food', path: '/canned' },
		{ text: 'Apartment', path: '/apartment' }
		// { text: 'Citi Bike', path: '/citibike' },
		/*
		{
			text: 'More',
			children: [
				{ text: "Rubik's Cube", path: '/rubiks-cube' },
				{ text: 'TheCubicle', path: '/the-cubicle' }
			]
		}
		*/
	];
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<ul
				tabindex="-1"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<div>James Chang</div>
				</li>
				<hr />
				{#each navArray as { text, path, children }}
					<li>
						{#if children}
							<a href={path}>{text}</a>
							<ul class="p-2">
								{#each children as { text, path }}
									<li><a href={path}>{text}</a></li>
								{/each}
							</ul>
						{:else}
							<a href={path}>{text}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost text-xl" href="/">
			<div class="avatar">
				<div class="w-10 rounded-full">
					<img src="/assets/central-park1.jpg" alt="James Chang" />
				</div>
			</div>
			<span class="hidden sm:flex">James Chang</span></a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navArray as { text, path, children }}
				<li>
					{#if children}
						<details>
							<summary>{text}</summary>
							<ul class="p-2">
								{#each children as { text, path }}
									<li><a href={path}>{text}</a></li>
								{/each}
							</ul>
						</details>
					{:else}
						<a href={path}>{text}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<select data-choose-theme class="select select-ghost select-sm mr-4">
			<option value="dark">Dark</option>
			<option value="light">Light</option>
			<option value="cupcake">Cupcake</option>
		</select>
		<a class="btn btn-sm mr-4" href="/contact">Contact</a>
		<a class="btn btn-sm btn-circle" href="https://github.com/big213/personal-site">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="h-6 w-6"
				stroke="currentColor"
				><title>github</title><path
					d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
				/></svg
			>
		</a>
	</div>
</div>
<div style="max-width: 500px;" class="p-3 mx-auto">
	<div>
		<slot />
	</div>
	<div style="height: 300px">&nbsp;</div>
</div>
<BackToTop />
