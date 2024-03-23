<script lang="ts">
  import { ChevronCompactRight, ChevronCompactLeft } from "svelte-bootstrap-icons";
  import Carousel from "$lib/components/carousel.svelte"
  import image1 from "$lib/assets/testImages/image1.png"
  import image2 from "$lib/assets/testImages/image2.jpeg"
  import image3 from "$lib/assets/testImages/image3.webp"
  import image4 from "$lib/assets/testImages/image4.jpg"
  import image5 from "$lib/assets/testImages/image5.webp"
  import image6 from "$lib/assets/testImages/image6.webp"
  import image7 from "$lib/assets/testImages/image7.jpg"

  /*This array should be a table of image variables imported in this script.*/
  let colors = [image1, image2, image3, image4, image5, image6, image7]
</script>

<!--TODO: Create a backend from the server that allow the site
to get featured games from the API-->
<div class="carousel">
  <Carousel autoplay="2000">
    {#each colors as color, index (index)}
      <div class="carouselItem">
        <img src={color} class="carouselItem-image" alt="image">
      </div>
    {/each}
    <span class="item-desc" slot="left-control"> <ChevronCompactLeft width={32} height={32}></ChevronCompactLeft> </span>
    <span class="item-desc" slot="right-control"><ChevronCompactRight width={32} height={32}></ChevronCompactRight></span>
  </Carousel>
</div>
<br><br>

<!--TODO: Make this a component-->
<div class="shopGrid">
  <div class="shopItem"  style="grid-column-start: 2;">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
  <div class="shopItem">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
  <div class="shopItem">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
  <div class="shopItem">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
  <div class="shopItem"  style="grid-row-start: 2; grid-column-start: 2;">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
  <div class="shopItem" style="grid-row-start: 2; grid-column-start: 3;">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
  <div class="shopItem" style="grid-row-start: 2; grid-column-start: 4;">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
  <div class="shopItem" style="grid-row-start: 2; grid-column-start: 5;">
    image here
    <div class="shopItem-desc text-white">
      <p class="shopItem-title">
        Board Game
      </p>
      <p style="margin-left: 5%">
        Like, play this game man.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .carousel {
    width: 100%;
  }

  /*Please note that this element is 
    A) Not a child of carousel
    B) Controls the size of the carousel
    and
    C) Should be a wrapper div for the image in use.
  */
  .carouselItem {
    aspect-ratio: 16/9;
    height: 90%;
    border-radius: 10px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    &-image {
      flex-shrink: 10;
      min-width: 100%;
      min-height: 100%
    }
  }

  .item-desc {
    display: inline-block;
  }

  .shopGrid {
    display: grid;
    grid-template-columns: .5fr repeat(4, .75fr) .5fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;
  }
  .shopItem {
    aspect-ratio: 2/3;
    height: 100%;
    border-radius: 8px;
    background-color: orangered;
    position: relative;
    &-desc {
      width: 100%;
      height: 40%;
      position: absolute;
      top: 59%; // 1% offset? not sure but it works ¯\_(ツ)_/¯
      background-color: rgba(0, 0, 0, 0.7);
      padding-bottom: 2%;
      border-radius: 8px;
    }
    &-title {
      margin-left: 5%;
      margin-top: 10%;
      font-size: larger;
      font-weight: bold;
    }
  }

  .container-section {
    aspect-ratio: 10/3;
    width: 100%;
  }
</style>