<template>
  <ul class="taglist list-inline">
    <li v-for="tag in post.tags" :key="tag.id">
      <g-link
        :to="tag.path"
      >
        #{{ tag.title }}
      </g-link>
    </li>
    
    </ul>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.taglist{
  list-style: none;
  padding: 0;
}
.taglist li{
  display: inline-block;
  margin-right: 15px;
}
.taglist li a, .single-post .social-text li a {
    font-size: 13px;
    font-weight: bold;
    color: #333;
}
</style>
