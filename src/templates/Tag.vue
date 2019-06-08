<template>
  <Layout>
    <section class="meta-title">
        <div class="col-sm-12 text-center">
            <div class="page-title pad-125 ">
                <h1 class="has-animation2" data-delay="0"><b># {{ $page.tag.title }}</b></h1>
            </div>
        </div>
    </section>

    <section class="blog-post style-two mb75">
		<div class="container">
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
                    <PostCard
                        v-for="edge in $page.tag.belongsTo.edges"
                        :key="edge.node.id"
                        :post="edge.node"
                    />
				</div>
			</div>
		</div>
    </section>
  </Layout>
</template>

<page-query>
query Tag($id: String!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            title
            path
            date
            timeToRead
            description
            cover_image(width: 770, height: 380, blur: 10)
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue';
export default {
  components: {
    PostCard,
  },
  metaInfo: {
    title: 'Maryam Bafandkar',
  },
};
</script>