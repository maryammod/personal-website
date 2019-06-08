<template>
  <Layout>

    <section class="single-post pad-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="entry-header text-left">
              <h4 class="entry-meta style2">{{ $page.blogPost.author }}<span></span> {{ $page.blogPost.date }}</h4>
              <h1 class="entry-title">{{ $page.blogPost.title }}</h1>
              <h5>{{ $page.blogPost.subtitle }}</h5>
            </div>
          </div>
          <div class="col-lg-12">	
            <div v-if="$page.blogPost.image" class="entry-media">
              <g-image :src="$page.blogPost.image" alt="post-image" />
            </div>
          </div>
          <div class="col-lg-8 offset-lg-2 ">
            <div class="entry-content" v-html="$page.blogPost.content"></div>

            <div class="entry-share-div">
              <h5>Share :</h5>
              <ul class="social-text light list-inline">
                <li class="list-inline-item"><a class="text-facebook" href="#">facebook</a></li>
                <li class="list-inline-item"><a class="text-twiiter" href="#">Twitter</a></li>
                <li class="list-inline-item"><a class="text-linkedin" href="#">Linkedin</a></li>
                <li class="list-inline-item"><a class="text-instagram" href="#">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-10 offset-lg-1 bottom-border text-center next-article top-border">
            <p>Next Article</p>
            <h2>The only professional beauty supply resources</h2>
          </div>

          <div class="col-lg-8 offset-lg-2 comments-section bottom-border">
            <div class="comments-list">
              <h5>Comments</h5>
              <div class="mar-top-xs">
                <vue-disqus shortname="maryam-bafandkar" :identifier="$page.blogPost.slug"></vue-disqus>
              </div>
            </div>
          </div>
          


        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
      author
    }
  }
</page-query>