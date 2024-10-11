<script lang="ts">
	import ApiKey from '../components/ApiKey.svelte';
	import ApiKeyExplanation from '../components/Int16Explanation.svelte';
	import ApiVersion from '../components/ApiVersion.svelte';
	import BytesChunks from '../components/BytesChunks.svelte';
	import ClientId from '../components/ClientId.svelte';
	import ClientIdExplanation from '../components/ClientIdExplanation.svelte';
	import CorrelationId from '../components/CorrelationId.svelte';
	import Int16Explanation from '../components/Int16Explanation.svelte';
	import Int32Explanation from '../components/Int32Explanation.svelte';
	import MessageSize from '../components/MessageSize.svelte';
	import MessageSizeExplanation from '../components/MessageSizeExplanation.svelte';
	import RequestBody from '../components/RequestBody.svelte';
	import RequestBodyExplanation from '../components/RequestBodyExplanation.svelte';
	import RequestHeader from '../components/RequestHeader.svelte';
	import RequestHeaderExplanation from '../components/RequestHeaderExplanation.svelte';
	import TagBuffer from '../components/TagBuffer.svelte';
	import TagBufferExplanation from '../components/TagBufferExplanation.svelte';

	let selectedChunkIndex: number = -1;

	const requestChunks = [
		{
			component: MessageSize,
			explanation: MessageSizeExplanation,
			hex: '00 00 00 23',
			name: 'Message Size'
		},
		{
			component: RequestHeader,
			explanation: RequestHeaderExplanation,
			hex: '00 12 00 03 00 00 00 07 00 09 6b 61 66 6b 61 2d 63 6c 69',
			name: 'Header',
			subchunks: [
				{
					component: ApiKey,
					explanation: Int16Explanation,
					meaning: 'The client is requesting information about API Versions.',
					name: 'API Key',
					hex: '00 12'
				},
				{
					component: ApiVersion,
					explanation: Int16Explanation,
					name: 'API Version',
					hex: '00 03'
				},
				{
					component: CorrelationId,
					explanation: Int32Explanation,
					name: 'Correlation ID',
					hex: '00 00 00 07',
					note: 'You need to parse this, and set the Correlation ID in your response header as the same value.'
				},
				{
					component: ClientId,
					explanation: ClientIdExplanation,
					name: 'Client ID',
					hex: '00 09 6b 61 66 6b 61 2d 63 6c 69'
				}
			]
		},
		{
			component: RequestBody,
			explanation: RequestBodyExplanation,
			hex: '00 0a 6b 61 66 6b 61 2d 63 6c 69 04 30 2e 31',
			name: 'Body'
		},
		{
			component: TagBuffer,
			explanation: TagBufferExplanation,
			hex: '00',
			name: 'End'
		}
	];
</script>

<div class="max-w-screen-lg mx-auto px-4">
	<h1 class="my-8 text-3xl sm:text-6xl text-">Kafka Wire Protocol Explorer</h1>

	<div class="space-y-8">
		<h2 class="text-2xl my-4">ApiVersions Request example:</h2>

		<div class="space-y-4">
			<h3 class="text-lg">Structure</h3>
			<!-- <BytesChunks chunks={requestChunks} /> -->
			<div>
				{#each requestChunks as chunk, index}
					<span
						class="font-mono px-2 py-1 cursor-pointer rounded mr-1 {selectedChunkIndex == index
							? 'bg-neutral-300 text-neutral-700'
							: 'bg-neutral-100 text-neutral-600'}"
						on:click={() => (selectedChunkIndex = index)}
					>
						{chunk.name}
					</span>
				{/each}
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="text-lg">Raw bytes</h3>
			<div class="leading-8">
				{#each requestChunks as chunk, index}
					<svelte:component this={chunk.component} bind:selectedChunkIndex {chunk} {index} />
				{/each}
			</div>
		</div>

		{#if selectedChunkIndex !== -1 && requestChunks[selectedChunkIndex].explanation}
			{@const chunk = requestChunks[selectedChunkIndex]}
			<svelte:component this={chunk.explanation} chunks={requestChunks} {chunk} />
		{/if}
	</div>
</div>
