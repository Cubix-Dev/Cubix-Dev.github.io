<template>
    <div class="container">
        <input class="container_toggle" type="checkbox" id="switch" name="mode">
        <label for="switch">Toggle</label>
    </div>
</template>

<script setup>
// TODO
 var checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}
</script>