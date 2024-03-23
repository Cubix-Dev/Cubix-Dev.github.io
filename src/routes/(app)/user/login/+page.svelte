<script lang="ts">
    import cubey from "$lib/assets/Cube.svg";
    import { Google, Discord, Github, Git } from "svelte-bootstrap-icons"
</script>

<main class="text-muted"> 
    <form class="rounded-card-login bg-dark">
      <div class="inline-box">
        <img class="rounded-card-img bg-orange" alt="Cubey" src={cubey}>
        <h2 class="text-white no-margin-force">Cubix Dev Portal</h2>
      </div>
      <h5>Become a developer in style!</h5>
      <div class="rounded-card-login-btn-container grid-3">
        <a class="button btn-dark rounded-card-login-opt-btn" href="#">
            <Google class="rounded-card-img" style="padding: 0 !important;"></Google>
        </a>
        <a class="button btn-dark rounded-card-login-opt-btn" href="#">
            <Discord class="rounded-card-img" style="padding: 0 !important;"></Discord>
        </a>
        <a class="button btn-dark rounded-card-login-opt-btn" href="#">
            <Github class="rounded-card-img" style="padding: 0 !important;"></Github>
        </a>
      </div>
      <hr style="border-color: #232323"> <!--TODO: Make this less noticeable-->
      <p>Email address</p>
      <input type="email" class="form-input" />
      <p>Your password</p>
      <input type="password" class="form-input" />
      <a class="button btn rounded-card-login-btn">Sign In</a>
      <div style="text-align:center">
        <a class="text-muted margin-bottom" href="#">Forgot your password</a>
      <br>
      <a class="text-muted" href="#">Need an account? Sign Up</a>
        n
        <br><br>
      </div>
    </form>
  </main>