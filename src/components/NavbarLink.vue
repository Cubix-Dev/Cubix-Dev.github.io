<template>
<router-link
class="nav-link"
:class="{activeClasses}"
aria-current="page" 
:to="page.link.url"
> {{ page.link.text }} </router-link>
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