<template>
    <div class="entry-meta-content">
        <div class="entry-date">{{post.date | getDay}}<span>{{post.date | getMonth}}</span></div>
        <h2 class="entry-title"><router-link :to="post.path">{{post.title}}</router-link></h2>
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
    filters: {
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

</style>
