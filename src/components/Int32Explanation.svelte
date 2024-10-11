<script lang="ts">
	import { parseChunkHexToInt } from '$lib/utils';

	export let chunks;
	export let chunk;
</script>

<div class="rounded-xl bg-neutral-100 py-4 px-6 space-y-4">
	<h3 class="text-lg">{chunk.name}</h3>

	<table class="table bg-white">
		<tbody>
			<tr>
				<th>Type:</th>
				<td>INT32</td>
			</tr>

			<tr>
				<th>Raw bytes:</th>
				<td>{chunk.hex}</td>
				<td>(Hex)</td>
			</tr>
			<tr>
				<th>Value: </th>
				<td>{parseChunkHexToInt(chunk)}</td>
				<td>(Decimal)</td>
			</tr>
			{#if chunk.note}
				<tr>
					<th>Note: </th>
					<td>{chunk.note}</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>
