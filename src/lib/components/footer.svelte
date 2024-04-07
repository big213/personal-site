<script lang="ts">
	export let updatedAt: string;
	export let createdAt: string;
</script>

<div>
	<hr />
	<small>Created: {createdAt}</small>
	{#if createdAt !== updatedAt}
		<small>(Updated {updatedAt})</small><br />
	{/if}
</div>
