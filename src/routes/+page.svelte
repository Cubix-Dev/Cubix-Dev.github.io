<script lang="ts">
  import { CashStack } from "svelte-bootstrap-icons";
	import logo from '$lib/assets/Cube.svg';
  import console from '$lib/assets/Infinite_Console.png';
  import Infinite from '$lib/assets/infinite.svg';
  
  // function openURL(uri: string) {
  //       window.open(uri);
  // }
</script>

<main>
  <div class="wrapper-box">
      <header class="header-spacer console-bg" style="background-image: url({console})">
       </header>
      <h1 class="text-white header-title-stretch">Cubix Infinite</h1>
       <p class="header-subtitle-stretch"> Infinite Ways To Play </p>
      <div class="header-bio-box">
        <p class="header-bio-left">
          Re-Imagining 
          How We Play
          Together
        </p>
        <p class="header-bio-right">
          Meet Infinite, Cubix's first current-gen gaming system. Designed with multiplayer in mind, this system redefines what it means to play together.
        </p>
      </div>
    </div>
  <div class="flex-box-right bg-main text-white">
    <div class="bio-box">
      <h3>
        More then just "Another Gaming System"
      </h3>
      <p>
        The Infinite does things differently. It's a technological marvel, using PC parts and JIT (Just In Time) Compiling to maximize lifespan and performance. All the while keeping the system nice and cool, even in high-end games.
      </p>
    </div>
  </div>
  <div class="flex-box bg-lmed text-black">
    <div class="inline-box-desc"> <!--TODO: Make sure this is centered. Feels off to me.-->
      <h2>System Specs</h2>
    </div>
    <div class="grid-5">
      <div class="card text-black" style="grid-column-start: 2;">
        <h3>Size</h3>
        <p>
          Length: 254mm (10in)
        <br>
          Width: 419.1mm (16.5in)
        <br>
          Height: 101.6mm (4in)
        </p>
      </div>
      <div class="card text-black" style="grid-column-start: 3;">
        <h3>CPU</h3>
        <p>
          AMD Ryzen 5 4600 G-Series
        <br>
          6 Cores (12 Threads)
        </p>
      </div>
      <div class="card text-black" style="grid-column-start: 4;">
        <h3>Graphics</h3>
        <p>
          AMD Radeon™ RX Vega 7
        <br>
          Integrated Graphics
        </p>
      </div>
      <div class="card text-black" style="grid-column-start: 5;">
        <h3>Storage</h3>
        <p>
          512GB NVME SSD 
        </p>
      </div>
    </div>
  </div>
  <div class="flex-box flex-box-text-center text-white">
    <div>
      <h3>
        Your Games In Your
        <br>
        Control
      </h3>
      <div class="overlay">
        <svg width="100" height="11">
          <rect width="100" height="10" style="fill:#d1461f80;" />
          Sorry, your browser does not support inline SVG.  
        </svg>
      </div>
      <p>
        
      </p>
    </div>
  </div>
</main>

<style>
  .console-bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    width: 100%;
  }
  .overlay {
    position: absolute;
    z-index: 0;
    top: 2vh
  }
</style>