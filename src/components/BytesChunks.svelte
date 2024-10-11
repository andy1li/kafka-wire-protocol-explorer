<script context="module">
	let selectedIndex;
</script>

<script lang="ts">
	import { getChunkHexSize } from '$lib/utils';

	export let chunks;
	export let isSubchunk = false;
	// export let chunk;
	// export let index: number;
	// export let selectedChunkIndex: number;

	// $: isSelected = selectedChunkIndex === -1 || index === selectedChunkIndex;
</script>

<div>
	{#if isSubchunk}
		<!-- {#each chunk.subchunks as subchunk, index}
			<span
				class="font-mono px-2 py-1 cursor-pointer rounded mr-1 {selectedSubChunkIndex == index
					? 'bg-neutral-300 text-neutral-700'
					: 'bg-neutral-200 text-neutral-600'}"
				on:click={() => (selectedSubChunkIndex = index)}
			>
				{subchunk.name}
			</span>
		{/each} -->
		123
	{:else}
		<!-- {#each chunks as chunk, index}
			<span
				class="font-mono px-2 py-1 cursor-pointer rounded mr-1 {selectedChunkIndex == index
					? 'bg-neutral-300 text-neutral-700'
					: 'bg-neutral-100 text-neutral-600'}"
				on:click={() => (selectedChunkIndex = index)}
			>
				{chunk.name}
			</span>
		{/each} -->
	{/if}
</div>
