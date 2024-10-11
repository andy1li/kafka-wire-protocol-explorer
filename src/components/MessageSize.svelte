<script lang="ts">
	export let chunk;
	export let index: number;
	export let selectedChunkIndex: number;

	$: isSelected = selectedChunkIndex === -1 || index === selectedChunkIndex;
</script>

<span
	class="cursor-pointer font-mono px-2 py-1 rounded mr-1 {isSelected
		? 'bg-blue-200 text-blue-900'
		: 'bg-neutral-100 text-neutral-600'}"
	on:click={() => (selectedChunkIndex = index)}
>
	{chunk.hex}{#if selectedChunkIndex == 0}: {parseInt(chunk.hex.replaceAll(' ', ''), 16)}
		bytes
	{/if}
</span>
