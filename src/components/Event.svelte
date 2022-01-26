<script>
	export let event;
	
	let expand = false;
</script>

<div class="event" class:expand>
	<h3 on:click={() => expand = !expand}>{event.n}</h3>

	{#if expand}
		<div class="inner">
			{#if event.i}
				<div class="flex">
					<div>
						<img src={event.i} alt={event.n}>
					</div>

					<div>
						<p>{event.d}</p>
					</div>
				</div>
			{:else}
				<p>{event.d}</p>
			{/if}
		</div>
	{/if}
</div>

<style>
    .event {
        font-family: "Titillium Web";
    }

    h3 {
        color: white;
	    margin-top: 6px;
	    margin-bottom: 0;
	    cursor: pointer;
    }

    h3:hover {
        color: var(--cyan);
    }

    .inner {
	    line-height: 1.3;
	    color: white;
    }

	.inner img {
		border-radius: 10px;
	}

	p {
		padding-left: 10px;
	}

	@media (min-width: 900px) {
		.inner img {
			max-width: 300px;
			min-width: 300px;
			margin-left: 10px;
		}
	
		.flex {
			display: flex;
			flex-wrap: nowrap;
		}

		.flex {
			margin-top: 10px;
		}
	}

	@media (max-width: 900px) {
		.flex img { width: 100%; }
		.flex p { margin-top: 10px; }
	}
</style>