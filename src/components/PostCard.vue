<template>
    <article class="has-animation2" data-delay="0">
        
        <PostMeta class="" :post="post" />

        <g-link
            :to="post.path"
            class="entry-media"
            v-if="post.cover_image"
        >
            <figure class="image is-16by9">
                <g-image alt="Cover image" :src="post.cover_image" />
            </figure>
        </g-link>

        <div class="entry-content-bottom">
            <p class="entry-content">{{post.description}}</p>
            <router-link class="entry-read-more" :to="post.path"><span></span>Read More</router-link>
        </div>

    </article>
        
</template>

<script>
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    PostMeta
  },
  props: ['post'],
}
</script>
