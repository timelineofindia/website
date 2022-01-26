<script>
	import Block from './components/Block.svelte';
	import ctx from "./ctx";
	import './styles/global.css';
</script>

<div class="intro">
	<h1 class="color-cyan">Timeline of India</h1>

	<p style="font-size: 20px; line-height: 1.1;">
		Timeline of India is a website which shows the events from the very first of the Indus civilization of the Indian subcontinent to the current state of the Indian subcontinent. This timeline also includes events which influenced the Indian subcontinent.
	</p>

	<div class="note">
		<h3 class="color-cyan">Note: </h3>
		The source of the events are took from Wikipedia, if any mistakes or addition of events, kindly create an issue in the <a href="https://github.com/timelineofindia/website">github repo</a>.
	</div>
</div>

<div class="timeline">
	{#each Object.entries(ctx) as entry}
		<Block {entry}/>
	{/each}
</div>

<style>
	.intro {
		width: auto;
		padding: 80px;
		color: white;
		font-family: "Titillium Web";
	}

	h1 {
		font-size: 60px;
		margin-bottom: 5px;
	}

	.note {
		background-color: var(--project-color);
		border-radius: 5px;
		width: auto;
		padding: 18px;
		margin-top: 15px;
	}

	h3 {
		margin: 0;
		font-weight: bold;
		display: inline-block;
	}

	.timeline {
		width: auto;
		padding: 80px;
	}

	@media (max-width: 800px) {
		.intro, .timeline {
			padding: 30px;
		}

		h1 { font-size: 30px; }
	}
</style>