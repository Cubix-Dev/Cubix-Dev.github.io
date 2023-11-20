<script>
  import { CashStack } from "svelte-bootstrap-icons";
	import logo from '$lib/assets/Cube.svg';
  import console from '$lib/assets/ImgConsole.png'
  import Infinite from '$lib/assets/infinite.png'
</script>

<main>
    <!-- <header class="header-spacer">
    <div class="inline-box">
      <img class="header-ico" src={console} alt="Cubix Console">
      <div class="inline-box-desc">
        <img class="social-ico-small" src={logo} alt="Cubix Logo"/>
        <p class="header-subtitle margin-bottom">Cubix</p>
        <h1 class="header-title margin-top">Infinite</h1>
        <p class="header-subtitle"> Infinite ways to play! </p>
      </div>
      </div>
    </header> -->
    <header class="header-spacer bg-light border-bottom">
      <div class="flex-box">
         <img class="header-ico" src={logo} alt="Cubix Logo">
         <h1 class="header-title">Cubix Infinite</h1>
         <p class="header-subtitle"> Infinite Ways To Play </p>
      </div>
   </header>
     <br>
     <!-- <div class="header-spacer">
      <div class="inline-box" style="margin-left: calc(17.5rem + 5%);">
        
      </div>
      <div class="inline-box">
        
        <div class="inline-box-desc">
          <h4 class="header-subtitle margin-top">Infinite Ways To Play</h4>
          <p class="text-white"></p>
        </div>
      </div>
    </div> -->
     <div class="header-spacer">
      <div class="flex-box-text-center">
        <img class="header-sub-ico pad" src={Infinite} alt="Cubix Console">
          <h2 class="header-title margin-top">More Than Just "Another Gaming Console"</h2>
          <h4 class="header-subtitle">The Infinite Does Things Differently</h4>
          <p class="text-white">The Infinite approaches gaming differently. Made up of common PC parts, with a Linux based OS and its own boot engine, it doesn't just launch your favorite games. It takes advantage of JIT (Just In Time) compiling to ensure optimal launch time even with games that have a lot of data. The result is a system that doesn't show its age, even late into its life cycle.</p>
       </div>
    </div>
     <br>
     <div class="inline-box-delimited justify">
      <div class="box">
        <div class="inline-box-desc">
          <h2 class="header-title margin-top">Powerful System Without Breaking The Bank</h2>
          <p class="text-white">Featuring a 6-Core AMD Processor the Cubix Infinite isnt just affordable, its powerful! The system maximizes processing power and graphical capabilities with full 4K UHD Support to give simply stunning visuals!</p>
        </div>
       </div>
       <div class="box">
        <div class="inline-box-desc">
          <h2 class="header-title margin-top">Your Games In Your Control</h2>
          <p class="text-white">The Infinite lets you expand your horizons, not confining you to an internet connection. Plug in, play where ever you see fit. Once the game is on your system its yours forever. No nonsense with dying eShops or holding your games hostage with subscription services. Plus you can share your library with not just other users on the system but your friends as well with Cubix Dream Transfer.</p>
        </div>
       </div>
     </div>
     <br>
    <div class="flex-box-text-center pad bg-orange">
      <div class="inline-box-desc">        
        <h2 class="header-title margin-top">Indie Powered</h2>
        <p class="text-white">The Infinite doesn't just give you big names, it supports the little guys too. With an extensive Indie dev library, you can enjoy the creations of developers from communities far and wide like <strong>TheUpdator</strong> and <strong> CodeKirby </strong>. Plus the system's Developer API is extremely developer friendly. You can become a developer on the Cubix Infinite with just a few clicks!</p>
      </div>
      <a class="button btn-pink" href="#">Register</a>
    </div>
    <br><br>
    <div class="flex-box-text-center pad bg-black">
      <div class="inline-box-desc">        
        <h2 class="header-title margin-top">Features You've been Missing</h2>
        <p class="text-white">Out the box, the Cubix Infinite already has services like an internet browser, Music Player and YouTube pre-installed for your instant enjoyment. Plus enjoy fun features like console themes, seasonal music and more!</p>
      </div>
    </div>
  <br>
  <!-- <div class="flex-box-text-center pad bg-med text-white"></div> -->
  <!-- <br><br> -->
  <!--Attempt to make cards to display other sources-->
  <!-- <div class="grid">
    <div class="card">
      <div class="card-body">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <!-- <h3 class="card-title">The Cubix Newsletter </h3>
        <p class="card-text">
          Read the latest news and updates from Cubix, including developer logs, announcements, and more.
        </p>
      </div>
    </div>
  </div> -->
</main>