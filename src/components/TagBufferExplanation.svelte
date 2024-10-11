<script lang="ts">
	import { parseChunkHexToInt } from '$lib/utils';
	import { getChunkHexSize } from '$lib/utils';

	export let chunks;
	export let chunk;
</script>

<div class="rounded-xl bg-neutral-100 py-4 px-6 space-y-8">
	<h3 class="text-lg">End</h3>

	<div>
		<table class="table bg-white">
			<tbody>
				<tr>
					<th>Type:</th>
					<td>Tag Buffer</td>
				</tr>
				<tr>
					<th>Content: </th>
					<td>0</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
