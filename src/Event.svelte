<script>
    export let event;

    let expand = false;
</script>

<div class={`evtblock ${expand ? "expand" : ""}`}>
    <h3 on:click={() => expand = !expand}>{event.name}</h3>

    {#if expand}
        <div class="exinner">
            {#if event.image}
                <div class="exflex">
                    <div><img src={event.image} alt={event.name}></div>
                    <div><p>{event.description}</p></div>
                </div>
            {:else}
                <p>{event.description}</p>
            {/if}
        </div>
    {/if}
</div>