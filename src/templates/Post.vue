<template>
  <Layout>
    <section class="single-post pad-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 mb-5">
            <div class="entry-header text-center">
              <h1 class="entry-title">{{ $page.post.title }}</h1>
              <div class="entry-date">{{ $page.post.date }}</div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="entry-media mt-0">
              <figure v-if="$page.post.cover_image" class="image is-16by9">
                <g-image alt="Cover image" :src="$page.post.cover_image"/>
              </figure>
            </div>
          </div>
          
          <div class="col-lg-8 offset-lg-2 bottom-border">
            <div class="entry-content" v-html="$page.post.content"></div>
            
            <div class="entry-share-div bottom-border">
              <h5>Tag :</h5>
              <PostTags :post="$page.post"/>
            </div>
          </div>

          <div class="col-lg-8 offset-lg-2 comments-section bottom-border">
            <div class="comments-list">
              <h4>Comments</h4>
              <div class="mar-top-xs">
                <vue-disqus shortname="maryam-bafandkar" :identifier="$page.post.title"></vue-disqus>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Post($path: String!) {
  post: post(path: $path) {
	title
	path
	date(format: "D. MMMM YYYY")
	timeToRead
	tags {
	  id
	  title
	  path
	}
	description
	content
	cover_image(width: 860, blur: 10)
  }
}
</page-query>