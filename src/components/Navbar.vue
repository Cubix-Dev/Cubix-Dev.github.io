<template>
    <nav
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
        >
            <a class="navbar-brand" href="#">{{title}}</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li v-for="(page, index) in pages" class="nav-item" :key="index">
                        <navbar-link
                            :page="page"
                            :isActive="activePage == index"
                            @click.prevent="navLinkClick(index)"
                        ></navbar-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form class="d-flex">
                    <button
                        class="btn btn-primary"
                        @click.prevent="changeTheme()"
                    >Toggle Theme</button>
                </form>
            </div>
        </nav>

</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    props: ['title', 'pages', 'activePage', 'navLinkClick'],
    data() {
        return {
           theme: "light",
        }
    },
    components: {
        NavbarLink
    },
    methods: {
        changeTheme() {
            let theme = "dark";
        
            if (this.theme == "dark") {
                theme = "light"
            }

            this.theme = theme
        }
    }
}
</script>