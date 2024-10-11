<script lang="ts">
	import { parseChunkHexToInt } from '$lib/utils';
	import { getChunkHexSize } from '$lib/utils';

	export let chunks;
	export let chunk;
</script>

<div class="rounded-xl bg-neutral-100 py-4 px-6 space-y-8">
	<h3 class="text-lg">Request Body (Version 3)</h3>

	<div>ℹ️ You don't need to parse this.</div>

	<div>
		<table class="table bg-white">
			<tbody>
				<tr>
					<th>Type:</th>
					<td>Array of Compact Strings</td>
				</tr>
				<tr>
					<th>Compact string 0: </th>
					<td>"kafka-cli"</td>
				</tr>
				<tr>
					<th>Compact string 1: </th>
					<td>"0.1"</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
