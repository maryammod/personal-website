<template>
    <div id="loader-wrapper">
      <div class="loader-img"><img src="@/assets/images/logo-2.png" alt="preloader"></div>
      <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
    </div>
</template>

<script>
export default {
    mounted(){
        document.querySelector('body').classList.add('loaded')
    }
}
</script>

