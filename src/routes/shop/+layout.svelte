<script lang="ts">
  import Foot from "$lib/components/foot.svelte";
  import Chefnav from "$lib/components/chefnav.svelte";
  import '../../styles/main.scss';
</script>

<Chefnav></Chefnav>
<main style="margin: 15px 15px;">
  <slot></slot>
</main>
<Foot></Foot>