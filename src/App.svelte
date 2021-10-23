<script>
	import Event from "./Event.svelte";
	import ctx from "./ctx";
	import viewport from "./useViewport";
</script>

<div class="intro">
	<h1>Timeline of India</h1>

	<p>
		Timeline of India is a website which shows the events from the very first of the Indus civilization of the Indian subcontinent to the current state of the Indian subcontinent. This timeline also includes events which influenced the Indian subcontinent.
	</p>

	<div class="note">
		<h3>Note: </h3>
		The source of the events are took from Wikipedia, if any mistakes or addition of events, kindly create an issue in the <a href="https://github.com/timelineofindia/website">github repo</a>.
	</div>
</div>

<div class="timeline">
	{#each Object.entries(ctx) as entry}
		<div class="block" style={`padding-top: ${Math.floor(entry[1].margin * 1.25)}px`}>
			<div 
				class="blinner"
				use:viewport
				on:enterViewport={e => e.target.classList.add("display-block")}
				on:exitViewport={e => e.target.classList.remove("display-block")}
			>
				<h1>{entry[0]}</h1>

				{#if entry[1].name}
					<Event event={entry[1]}/>
				{:else}
					<div class="evtrow">
						{#each entry[1].value as event}
							<Event event={event}/>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>