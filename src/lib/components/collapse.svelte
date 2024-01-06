<script>
	/**
	 * @type {any}
	 */
	export let headerText;
	let expanded = false; // by default it is not expanded.
</script>

<div class="margin-bottom">
    <button class="expand-card" aria-expanded={expanded} on:click={() => (expanded = !expanded)}
        >{headerText}
        <!-- <svg viewBox="0 0 20 20" class="sign" fill="none">
            <path class="vert" d="M10 1V19" stroke="black" stroke-width="2" />
            <path d="M1 10L19 10" stroke="black" stroke-width="2" />
        </svg> -->
    </button>
    <div class="collapse" hidden={!expanded}>
        <slot />
    </div>
</div>

