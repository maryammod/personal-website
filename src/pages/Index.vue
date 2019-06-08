<template>
  <Layout>

    <section class="top-header style-seven pad-top-150 pad-bottom-150 bg-pattern-2 mt-0 mb100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-xl-8 offset-xl-2 text-center">
            <h1 class="has-animation2" data-delay="10">Hello, my name is Maryam</h1>
            <p class="has-animation2" data-delay="20">I am Boozi Ni Nazi!</p>
            <ul class="social-text light list-inline has-animation" data-delay="30">
              <li class="list-inline-item"><a class="text-facebook" href="#">facebook</a></li>
              <li class="list-inline-item"><a class="text-twiiter" href="#">Twitter</a></li>
              <li class="list-inline-item"><a class="text-linkedin" href="#">Linkedin</a></li>
              <li class="list-inline-item"><a class="text-instagram" href="#">Instagram</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div class="logo-profile"><img src="https://via.placeholder.com/400x400.png" alt="profile-logo"></div>
    </section>

    <!-- <section class="blog-post style-one pad-75">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            
            <article 
              v-for="{ node } in $page.allBlogPost.edges" :key="node.id"
              class="has-animation2" data-delay="0"
            >

              <div class="entry-meta-content">
                <div class="entry-date">{{node.day}}<span>{{node.month}}</span></div>
                <h2 class="entry-title"><router-link :to="node.path">{{node.title}}</router-link></h2>
                <span class="entry-meta">By <a href="#">{{node.author}}</a> in <a href="#">{{node.category}}</a></span>
              </div>
              <div v-if="node.image" class="entry-media">
                <g-image :src="node.image" alt="post-image" />
              </div>
              <div class="entry-content-bottom">
                <p class="entry-content">{{node.description}}</p>
                <router-link class="entry-read-more" :to="node.path"><span></span>Read More</router-link>
                <ul class="social-share list-inline">
                  <li class="list-inline-item"><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                  <li class="list-inline-item"><a href="#"><i class="fa fa-heart"></i></a></li>
                  <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                  <li class="list-inline-item"><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                </ul>
                <span class="entry-meta bold float-right">Share</span>
              </div>
            </article>
          </div>
        </div>
        <div class="row">
          <div class="d-flex justify-content-center col-sm-12">
            <div class="button-4">
                <div class="eff-4"></div>
                <a href="#"> Load More</a>
            </div>
          </div>
        </div>
      </div>
    </section> -->

  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

</style>
