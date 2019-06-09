<template>
  <Layout>

    <Author/>

    <section class="blog-post style-three pad-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 offset-sm-1 col-sm-10">
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
          </div>
        </div>
      </div>
      
    </section>

  </Layout>
</template>
<page-query>
{
  posts: allPost {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date
        timeToRead
        description
        cover_image(width: 770, height: 380, blur: 10)
        ... on Post {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import Author from '~/components/Author.vue'

export default {
  data(){
    return{
      posts : this.$page
    }
  },
  components:{
    PostCard,
    Author
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>

</style>
