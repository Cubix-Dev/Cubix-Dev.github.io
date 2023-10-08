<script>
	import logo from "$lib/assets/Login_Logo.png";
</script>


<!-- svelte-ignore a11y-missing-attribute -->
<html class="bg-gradient">
    <div class="justify spacer">
        <div class="content-container">
            <div class="form-container">
                <div class="form-header-container justify">
                    <img src={logo} width="175" height="70">
                </div>
                <div class="form-content-container border-none ">
                    <form class="form-content-inner-container">
                        <input type="username" class="form-input" placeholder="Username"/>
                        <input type="email" class="form-input" placeholder="Email"/>
                        <input type="password" class="form-input" placeholder="Password"/>

                        <div class="button-container">
                            <button class="button-container-button">Login</button>
                            <button class="button-container-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</html>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
    .justify {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box; 
        font-family: Ubuntu;
    }

    .border-none {
        border: none;
    }
</style>
