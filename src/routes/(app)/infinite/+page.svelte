<script>
    import { CashStack } from "svelte-bootstrap-icons";
    import logo from '$lib/assets/Cube.svg';
    import console from '$lib/assets/ImgConsole.png'
    import Infinite from '$lib/assets/infinite.svg'
</script>

<main>
    <header class="header-spacer"> <!--style="background-image:url({console}); background-repeat: no-repeat; background-attachment: fixed; background-size: cover;" -->
        <div class="flex-box">
           <img class="header-ico" src={Infinite} alt="Cubix Infinite Logo">
           <h4 class="text-white margin-bottom" style="font-size: larger;">Cubix</h4>
           <h1 class="header-title margin-top">Infinite</h1>
           <h2 class="header-subtitle"> Infinite Ways To Play </h2>
        </div>
     </header>
    <div class="header-spacer">
        <div class="flex-box-text-center">
            <h2 class="header-title margin-top">More Than Just "Another Gaming Console"</h2>
            <h4 class="header-subtitle">The Infinite Does Things Differently</h4>
            <p class="text-white">The Infinite approaches gaming differently. Made up of common PC parts, with a Linux based OS and its own boot engine, it doesn't just launch your favorite games. It takes advantage of JIT (Just In Time) compiling to ensure optimal launch time even with games that have a lot of data. The result is a system that doesn't show its age, even late into its life cycle.</p>
        </div>
    </div>
    <div class="inline-box-delimited justify">
        <div class="box">
            <div class="inline-box-desc">
                <h2 class="header-title margin-top">Re-Imagining How We Play Together</h2>
                <p class="text-white">The Cubix Infinite isn't just a gaming console. Its an experience. The system includes 4 ports for controllers so you can enjoy your favorite games with friends. We've completely changed how you play games together thanks to Cubix Dream Transfer, a new feature that allows you to share your save data from your controller to any system. Take your progress with without worring about save corruption.</p>
            </div>
        </div>
        <div class="box">
            <div class="inline-box-desc">
                <h2 class="header-title margin-top">Your Games In Your Control</h2>
                <p class="text-white">The Infinite lets you expand your horizons, not confining you to an internet connection. Plug in, play where ever you see fit. Once the game is on your system its yours forever. No nonsense with dying eShops or holding your games hostage with subscription services. Plus you can share your library with not just other users on the system but your friends as well with Cubix Dream Transfer.</p>
            </div>
        </div>
    </div>
</main>