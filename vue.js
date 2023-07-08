let app = Vue.createApp({
    data() {
        return {
           activePage: 0,
           navTitle: "Cubix",
           pages: [
            {
                link: {text: 'Home', url: 'home'},
                pageTitle: 'SNext Vue Proto',
                content: 'Snext will be using vue!'
            },
            {
                link: {text: 'About', url: 'details'},
                pageTitle: 'SNext Vue About',
                content: 'Snext will be using vue!'
            },
            {
                link: {text: 'Discover', url: 'discover'},
                pageTitle: 'SNext Vue Discovery',
                content: 'Snext will be using vue!'
            }
           ]
        };
    },
})

app.component('page-content', {
    props: ['page'],
    template: `
    <div>
        <h1> {{ page.pageTitle }} </h1>
        <p> {{ page.content }} </p>
    </div>
    `
})

app.component('navbar', {
    props: ['title', 'pages', 'activePage', 'navLinkClick'],
    data() {
        return {
           theme: "dark",
        }
    },
    template: `
    <nav
        :class="[\'navbar-\${theme}\', \'bg-\${theme}\', 'navbar', 'navbar-expand-lg']"
        >
            <a class="navbar-brand" href="#">{{title}}</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li v-for="(page, index) in pages" class="nav-item" :key="index">
                        <a 
                        class="nav-link"
                        :class="{active: activePage == index}"
                        aria-current="page" 
                        :href="page.link.url"
                        
                        > {{ page.link.text }} </a>
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
    `,
    methods: {
        changeTheme() {
            let theme = "dark";
        
            if (this.theme == "dark") {
                theme = "light"
            }

            this.theme = theme
        }
    }
})

app.mount('body') 