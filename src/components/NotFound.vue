<template>
 <a href="https://www.google.com/" data-jzz-gui-player="true" class="a">Click here for help.</a>

    <div class='flex-container'>
        <div>
            <h1 class="Plate">404</h1>
        </div>

        <a style='font-size: 50px;'>There may or may not have been a page here... <br>You will never know</a>

    </div>
</template>

<style scoped>
body {
        background: #212224;
        background-image: url('https://replit.com/@Simple21/ScratchNext#layered-steps-haikei.svg');
        color: white;
        font-family: 'Roboto',sans-serif;
        background-size: cover;
      }
      .plate {
        transform: rotate(-90deg); 
        height: 145px; 
        font-size: 145px;
        text-decoration: underline;
        position: fixed;
        line-height: 1;
        margin: auto;
        top: 0;
        bottom: 0;
        /*transition: top .1s, left .1s;*/
        text-align: center;
        width: 100%;
      }
      .a {
        text-decoration: none;
        color: #FFFFFF;
        position: fixed;
        top: 20px;
        text-align: center;
        width: 100%;
      }

      .vl {
            border-left: 5px solid white;
            height: inherit;
      }

      .flex-container {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        }

    .flex-item:nth-child(1) {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        }

    .flex-item:nth-child(2) {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
    }
</style>
