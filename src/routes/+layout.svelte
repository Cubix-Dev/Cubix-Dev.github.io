<script>
    import Foot from "../lib/foot.svelte";
    import Nav from "../lib/nav.svelte";
    import '../main.scss';
</script>

<Nav></Nav>
<main>
    <slot></slot>
</main>
<Foot></Foot>