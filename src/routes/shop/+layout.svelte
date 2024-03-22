<script lang="ts">
  import Foot from "$lib/components/foot.svelte";
  // import Chefnav from "$lib/components/chefnav.svelte";
  import '../../styles/main.scss';
</script>

<!-- <ChefNav></ChefNav> -->
<main style="margin: 15px 15px;">
  <slot></slot>
</main>
<Foot></Foot>