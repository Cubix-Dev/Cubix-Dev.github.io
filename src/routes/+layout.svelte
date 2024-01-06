<script>
    import Foot from "../lib/components/foot.svelte";
    import Nav from "../lib/components/nav.svelte";
    import '../styles/main.scss';
</script>

<Nav></Nav>
<main style="margin: 15px 15px;">
    <slot></slot>
</main>
<Foot></Foot>