<template>
    <section class="footer-wrapper pad-75 bg-lightblue">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <!-- <ul class="social-icons-two light list-inline">
              <li class="list-inline-item"><a href="#"><i class="icon-google-plus"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="icon-facebook"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="icon-twitter"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="icon-linedin"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="icon-instagram"></i></a></li>
            </ul> -->
            <p class="copyright-text"><strong>❤️ Maryam Bafandkar ❤️</strong></p>
            <a href="#" class="back-top">BACK TO TOP</a>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import moment from 'moment';

export default {
  data: ()=>{
    return {
      
    }
  },
  computed:{
    year(){
      return moment().format("YYYY")
    }
  }
}
</script>

<style>

</style>

