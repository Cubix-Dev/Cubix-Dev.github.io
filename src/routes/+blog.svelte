<script lang="ts">
  import { CashStack } from "svelte-bootstrap-icons";
	import logo from '$lib/assets/Cube.svg';
  import console from '$lib/assets/ImgConsole.png';
  import Infinite from '$lib/assets/infinite.svg';
  
  function openURL(uri: string) {
        window.open(uri);
      }
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
    <header class="header-spacer"> <!--style="background-image:url({console}); background-repeat: no-repeat; background-attachment: fixed; background-size: cover;" -->
      <div class="flex-box">
         <img class="header-ico" src={Infinite} alt="Cubix Infinite Logo">
         <h4 class="text-white margin-bottom" style="font-size: larger;">Cubix</h4>
         <h1 class="header-title margin-top">Infinite</h1>
         <h2 class="header-subtitle"> Infinite Ways To Play </h2>
      </div>
   </header>
<!--
   <div class="inline-box-delimited justify">
    <div class="vertin-box bg-dark text-white">
      <img class="vertin-box-img" src={logo} alt="Cubix Logo">
      <h1 class="vertin-box-title">About Cubix</h1>
      <p>Learn more about the Cubix organzation, what we do and how we do it.</p>
     </div>
     <div class="vertin-box bg-dark text-white">
      <img class="vertin-box-img" src={Infinite} alt="Cubix Infinite">
      <h1 class="vertin-box-title">About The Cubix Infinite</h1>
      <p>Learn more about the Cubix Infinite, exploring specs, benchmark test and more.</p>
     </div>
     <div class="vertin-box-disabled bg-disabled text-white">
      <img class="vertin-box-img" src={Infinite} alt="Cubix Infinite">
      <h1 class="vertin-box-title">Cubix Blog</h1>
      <p>Read the latest new regarding Cubix and the Cubix Infinite.</p>
     </div>
    -->

     <!--About Cubix-->
     <button class="vertin-box bg-dark text-white" on:click={() => openURL('https://google.com')}>
      <img class="vertin-box-img" src={logo} alt="Cubix Logo">
      <h1 class="vertin-box-title">About Cubix</h1>
      <p>Learn more about the Cubix organzation, what we do and how we do it.</p>
    </button>

         <!--Cubix Infinite Page-->
    <button class="vertin-box bg-dark text-white" on:click={() => openURL('https://google.com')}>
      <img class="vertin-box-img" src={Infinite} alt="Cubix Infinite">
      <h1 class="vertin-box-title">About The Cubix Infinite</h1>
      <p>Learn more about the Cubix Infinite, exploring specs, benchmark test and more.</p>
    </button>

         <!--Blog-->
    <button class="vertin-box bg-dark text-white" on:click={() => openURL('https://google.com')}>
      <img class="vertin-box-img" src={Infinite} alt="Cubix Infinite">
      <h1 class="vertin-box-title">Cubix Blog</h1>
      <p>Read the latest new regarding Cubix and the Cubix Infinite.</p>
    </button>
    
   <br><br>
    
    <!-- <div class="header-spacer">
      <div class="inline-box">
        <img class="header-ico pad" src={Infinite} alt="Cubix Console">
        <div class="inline-box-desc">
          <h2 class="header-title margin-top">Infinite Ways To Play</h2>
          <p class="text-white">The Cubix Infinite is built with multiplayer in mind, featuring support for up to 4 controllers connected at once! Plus with native (and free) online you can connect with what we aim to be thousands of other Infinite users! Plus share your progress with your friends with the Cubix Dream Card system. Share your save data with other consoles simply by connecting your controller! </p>
        </div>
       </div>
    </div> -->
     <br>
     <!-- <div class="inline-box-delimited justify">
      
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
     </div> -->
     <br>
     <div class="header-spacer">
      <div class="flex-box-text-center">
          <h2 class="header-title margin-top">More Than Just "Another Gaming Console"</h2>
          <h4 class="header-subtitle">The Infinite Does Things Differently</h4>
          <p class="text-white">The Infinite approaches gaming differently. Made up of common PC parts, with a Linux based OS and its own boot engine, it doesn't just launch your favorite games. It takes advantage of JIT (Just In Time) compiling to ensure optimal launch time even with games that have a lot of data. The result is a system that doesn't show its age, even late into its life cycle.</p>
       </div>
    </div>
    <div class="flex-box-text-center pad bg-orange">
      <div class="inline-box-desc">        
        <h2 class="header-title margin-top">Indie Powered</h2>
        <p class="text-white">The Infinite doesn't just give you big names, it supports the little guys too. With an extensive Indie dev library, you can enjoy the creations of developers from communities far and wide like <strong>TheUpdator</strong> and <strong> CodeKirby </strong>. Plus the system's Developer API is extremely developer friendly. You can become a developer on the Cubix Infinite with just a few clicks!</p>
      </div>
      <button class="small-anim pink" on:click={() => openURL('https://google.com')}>
        Developer Portal
       </button>
    </div>
    <br><br>
    <div class="flex-box-text-center pad bg-black">
      <div class="inline-box-desc">        
        <h2 class="header-title margin-top">Features You've been Missing</h2>
        <p class="text-white">Out the box, the Cubix Infinite already has services like an internet browser, Music Player and YouTube pre-installed for your instant enjoyment. Plus enjoy fun features like console themes, seasonal music and more!</p>
      </div>
    </div>
  <br>
  <section id="donate">
    <br>
    <div class="flex-box-text-center pad bg-orange">
     <div class="inline-box-desc">        
       <h2 class="header-title margin-top"><CashStack width={24} height={24}/> Join The Early Supporters <CashStack width={24} height={24}/></h2>
       <p class="text-white">Cubix needs your help! You can become an early supporter for the Cubix Infinite by making a donation of any amount to Cubix Organization via our kickstarter! Your donation goes towards the continued development of the Cubix Infinite and helps solidify its position on market.</p>
     </div>
     
     <button class="small-anim pink" on:click={() => openURL('https://google.com')}>
      Support Us
     </button>
    </div>
    <br>
  </section>
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