<script lang="ts">
  import { CashStack } from "svelte-bootstrap-icons";
	import logo from '$lib/assets/Cube.svg';
  import console from '$lib/assets/Infinite_Console.png';
  import Infinite from '$lib/assets/infinite.svg';
  import Tea from "../lib/components/tea.svelte";
  import Collapse from "$lib/components/collapse.svelte";
</script>

<main>
  <!--HERO Section-->
  <div class="wrapper-box">
      <header class="header-spacer console-bg" style="background-image: url({console})">
       </header>
      <h1 class="text-white header-title-stretch">Cubix Infinite</h1>
       <p class="header-subtitle-stretch"> Infinite Ways To Play </p>
      <div class="header-bio-box">
        <p class="header-bio-left no-margin-force text-black-i">
          Re-Imagining 
          How We Play
          Together
        </p>
        <p class="header-bio-right no-margin-force text-black-i">
          Meet Infinite, Cubix's first current-gen gaming system. Designed with multiplayer in mind, this system redefines what it means to play together.
        </p>
      </div>
  </div>
  <!--More than another gaming system-->
  <div class="flex-box-right bg-main text-white margin-top margin-bottom">
    <div class="bio-box">
      <h3>
        More then just "Another Gaming System"
      </h3>
      <p>
        The Infinite does things differently. It's a technological marvel, using PC parts and JIT (Just In Time) Compiling to maximize lifespan and performance. All the while keeping the system nice and cool, even in high-end games.
      </p>
    </div>
  </div>
  <!--System Spec-->
  <div class="flex-box bg-lmed text-black pad-force">
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
  <!--More About Cubix Cards-->
  <Tea></Tea>
  <!--FAQ-->
  <div class="text-white flex-box-middle margin-top">
    <div>
      <h1>FAQ</h1>
      <p style="width: 40%; font-size: large">
        Answering some frequently asked questions regarding Cubix and the Cubix Infinite
      </p>
      
    </div>
    <div class="flex-box-right">
      <div class="card-box">
        <Collapse headerText={'When will the Infinite be available?'} >
          The Cubix Infinite is expected to be available around March of 2025 the latest. You can check our <a href="#">Blog Page</a> for details and consistent updates.
        </Collapse>
        <Collapse headerText={'What games will be on the Infinite?'} >
          Currently we're still working on building a list of what games will actually be on the system. Any developers can create a game and apply to get on the console once a proper SDK is released.
        </Collapse>
        <Collapse headerText={'How much will the system cost?'} >
          Although we haven't set a final price, the currest estimated price is 300 - 350 USD.
        </Collapse>
      </div>
    </div>
  </div>
  <!--Kickstarter Support Page-->
  <div class="text-white flex-box margin-top margin-bottom">
    <h2 style="font-weight: normal; font-size: 2rem">Join the growing list of supporters! </h2>
    <p style="margin-top: 0px">Support us by backing our Kickstarter!</p>
    <a class="btn-acc button" href="#"> Support Us <a>
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
   .card-box {
    width: 70%;
   }

</style>