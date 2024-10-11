<script lang="ts">
	import { parseChunkHexToInt } from '$lib/utils';
	import { getChunkHexSize } from '$lib/utils';

	export let chunk;
	export let index;
	export let selectedChunkIndex;

	$: isSelected = selectedChunkIndex === -1 || index === selectedChunkIndex;
</script>

<span
	class="cursor-pointer font-mono px-2 py-1 rounded mr-1 {isSelected
		? 'bg-blue-200 text-blue-900'
		: 'bg-neutral-200 text-neutral-600'}"
	on:click={() => (selectedChunkIndex = index)}
>
	{chunk.hex}
</span>
