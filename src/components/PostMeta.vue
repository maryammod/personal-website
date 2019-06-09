<template>
    <div class="entry-meta-content">
        <div class="my-date">{{post.date | formatDate}}</div>
        <h2 class="entry-title"><span>{{postInitial}}</span><router-link :to="post.path">{{post.title}}</router-link></h2>
        <PostTags :post="post" />
    </div>
</template>

<script>
import moment from 'moment'
import PostTags from '~/components/PostTags'

export default {
    components:{
        PostTags
    },
    props: {
        post: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    computed:{
        postInitial(){
            return this.post.title.toUpperCase().charAt(0)
        }
    },
    filters: {
        formatDate: (value) =>{
            if (value) {
                return moment(String(value)).format('LL')
            }
        },
        getMonth: (value) => {
            if (value) {
                return moment(String(value)).format('MMM')
            }
        },
        getDay: (value) => {
            if (value) {
                return moment(String(value)).format('DD')
            }
        }
    }
}
</script>

<style>
.my-date{
    position: relative;
    left: 70px;
}
.blog-post.style-three .entry-title{
    margin-bottom: 10px;
    display: block;
}
.blog-post.style-three .entry-meta-content {
    margin-bottom: 20px;
}
</style>
