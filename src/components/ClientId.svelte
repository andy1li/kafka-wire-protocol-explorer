<script lang="ts">
	import { parseChunkHexToInt } from '$lib/utils';
	import { getChunkHexSize } from '$lib/utils';

	export let chunk;
	export let index;
	export let selectedChunkIndex;

	$: isSelected = index === selectedChunkIndex;
</script>

<span
	class="cursor-pointer font-mono px-2 py-1 rounded mr-1 {isSelected
		? 'bg-neutral-300 text-neutral-700'
		: 'bg-neutral-200 text-neutral-600'}"
	on:click={() => (selectedChunkIndex = index)}
>
	{chunk.hex}
</span>
