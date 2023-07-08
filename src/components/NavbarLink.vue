<template>
<a 
class="nav-link"
:class="{activeClasses}"
aria-current="page" 
:href="page.link.url"
> {{ page.link.text }} </a>
</template>

<script>
export default {
    props: ['page', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive
            }
        }
    }
}

</script>