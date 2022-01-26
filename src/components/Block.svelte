<script>
    import Event from "./Event.svelte";
	import viewport from "../scripts/useViewport";
	import { getIndex } from "../scripts/blockIndex";

	export let entry;
</script>

<div 
	class="block-wrapper" 
	style="padding-top: {getIndex(entry[0])}px"
>
	<div 
		class="block"
		use:viewport
		on:enterViewport={e => e.target.classList.add("display-block")}
		on:exitViewport={e => e.target.classList.remove("display-block")}
	>
		<h1>{entry[0]}</h1>

			{#if entry[1].n}
				<Event event={entry[1]}/>
			{:else}
				<div class="event-row">
					{#each entry[1] as event}
						<Event {event}/>
					{/each}
				</div>
			{/if}
	</div>
</div>

<style>
    .block-wrapper {
		padding-left: 20px;
		border-left: 5px solid var(--project-color);
	}

	.block-wrapper h1 {
		color: var(--cyan);
		font-family: "consolas";
		margin: 0;
        z-index: 2;
        line-height: 1.1;
        margin-top: -16px;
	}

    .block {
	    background-color: var(--project-color);
	    padding: 25px;
	    border-radius: 20px;
	    opacity: 0;
    }

    .block::before {
        content: " ";
        display: inline-block;
        position: relative;
        left: -55.5px;
        top: 20px;
        z-index: 100;
        border-radius: 100%;
        background: var(--cyan);
        height: 16px;
        width: 16px;
        transition: box-shadow 0.1s ease-in-out;
    }

    .block:hover::before {
        box-shadow: 0 0 0 6px rgba(100, 255, 218, .6);
    }

    :global(.expand h3) {
	    font-size: 30px;
    }
</style>