<script lang="ts">
	import { getChunkHexSize } from '$lib/utils';

	export let chunk;
	export let index: number;
	export let selectedChunkIndex: number;

	$: isSelected = selectedChunkIndex === -1 || index === selectedChunkIndex;
</script>

<span
	class="font-mono px-2 py-1 cursor-pointer rounded mr-1 {isSelected
		? 'bg-green-200 text-green-900'
		: 'bg-neutral-100 text-neutral-600 '}"
	on:click={() => (selectedChunkIndex = index)}
>
	{#if selectedChunkIndex == 0}
		{chunk.name} size: {getChunkHexSize(chunk)} bytes
	{:else}
		{chunk.hex}
	{/if}
</span>
