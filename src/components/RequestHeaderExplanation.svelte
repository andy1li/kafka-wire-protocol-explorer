<script lang="ts">
	import { parseChunkHexToInt } from '$lib/utils';
	import { getChunkHexSize } from '$lib/utils';

	export let chunk;

	let selectedSubChunkIndex: number = -1;
</script>

<div class="rounded-xl bg-neutral-50 py-4 px-6 mt-4 space-y-4">
	<h3 class="text-lg">Request Header (Version 1)</h3>

	<div class="space-y-8">
		<div class="space-y-4">
			<h3 class="text">Structure</h3>
			<div>
				{#each chunk.subchunks as subchunk, index}
					<span
						class="font-mono px-2 py-1 cursor-pointer rounded mr-1 {selectedSubChunkIndex == index
							? 'bg-neutral-300 text-neutral-700'
							: 'bg-neutral-200 text-neutral-600'}"
						on:click={() => (selectedSubChunkIndex = index)}
					>
						{subchunk.name}
					</span>
				{/each}
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="text">Raw bytes</h3>
			<div class="leading-8">
				{#each chunk.subchunks as subchunk, index}
					<svelte:component
						this={subchunk.component}
						bind:selectedChunkIndex={selectedSubChunkIndex}
						chunk={subchunk}
						{index}
					/>
				{/each}
			</div>
		</div>

		{#if selectedSubChunkIndex !== -1}
			{@const subchunk = chunk.subchunks[selectedSubChunkIndex]}
			<svelte:component this={subchunk.explanation} chunk={subchunk} />
		{/if}
	</div>
</div>
