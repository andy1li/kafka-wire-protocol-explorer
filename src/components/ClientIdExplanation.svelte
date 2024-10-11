<script lang="ts">
	import { parseChunkHexToInt } from '$lib/utils';

	export let chunks;
	export let chunk;
</script>

<div class="rounded-xl bg-neutral-100 py-4 px-6 space-y-8">
	<h3 class="text-lg">{chunk.name}</h3>

	<div>ℹ️ You don't need to parse this.</div>

	<div>Type: Nullable String</div>

	<div>
		<div class="mb-4">String length</div>
		<table class="table bg-white">
			<tbody>
				<tr>
					<th>Type:</th>
					<td>INT16</td>
				</tr>
				<tr>
					<th>Raw bytes:</th>
					<td>00 09</td>
					<td>(Hex)</td>
				</tr>
				<tr>
					<th>Value: </th>
					<td>9 (bytes)</td>
					<td>(Decimal)</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div>
		String content
		<table class="table bg-white">
			<tbody>
				<tr>
					<th>Raw bytes:</th>
					<td>6b 61 66 6b 61 2d 63 6c 69</td>
					<td>(Hex)</td>
				</tr>
				<tr>
					<th>Unicode: </th>
					<td>"kafka-cli"</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
