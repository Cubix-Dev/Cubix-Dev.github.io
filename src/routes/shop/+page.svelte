<script lang="ts">
  import { CaretRightFill, CaretLeftFill } from "svelte-bootstrap-icons";
  import carousel from "../../lib/components/carousel.svelte"
  /*This array should be a table of image variables imported in this script. For right now, this is just a placeholder
  */
  let images = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
</script>

<!--TODO: Create a backend from the server that allow the site
to get featured games from the API-->
<div class="carousel">
  <Carousel autoplay="2000">
  {#each images as image, index (index)}
    <div class="carouselItem" style="background-color: {image}" />
  {/each}
  <span slot="left-control"><img src={CaretLeftFill} alt="Caret Left"></span>
  <span slot="right-control"><img src={CaretRighttFill} alt="Caret Right"></span>
</Carousel>
</div>

<style>
  .carousel {
    height: 25%;
    width: 100%;
  }
  /*Please note that this element is 
    A) Not a child of carousel
    B) Controls the size of the carousel
    and
    C) Should be a wrapper div for the image in use.
  */
  .carouselItem {
        width: 16rem;
        height: 9rem
  }

  span {
    display: inline-block;
    margin-top: 6rem;
  }
</style>