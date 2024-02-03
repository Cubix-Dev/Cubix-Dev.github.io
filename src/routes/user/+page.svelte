<script>
	import logo from "$lib/assets/Login_Logo.png";
</script>


<!-- svelte-ignore a11y-missing-attribute -->
<html class="bg-gradient">
    <div class="justify spacer">
        <div class="content-container">
            <div class="form-container">
                <div class="form-header-container justify">
                    <img src={logo} width="175px" height="70px">
                </div>
                <div class="form-content-container border-none ">
                    <form class="form-content-inner-container">
                        <input type="username" class="form-input" placeholder="Username"/>
                        <input type="email" class="form-input" placeholder="Email"/>
                        <input type="password" class="form-input" placeholder="Password"/>

                        <div class="button-container" style="vertical-align: center;">
                            <button class="button-container-button"><b>Login</b></button>
                            <button class="button-container-button"><b>Register</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</html>

<style lang="scss">
    div {
        font-family: "Plus Jakarta Sans", sans-serif;
    }
    

    input {
        font-family: "Plus Jakarta Sans", sans-serif;
    }

    button {
        font-family: "Plus Jakarta Sans", sans-serif;
        height: 40px;
    }
    
    .justify {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box; 
        font-family: "Plus Jakarta Sans", sans-serif;
    }

    .border-none {
        border: none;
    }
</style>
