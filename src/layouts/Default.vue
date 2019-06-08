<template>
  <div class="layout">
    <!-- preloader -->
    <cabeLoader />

    <!-- search wrapper -->
    <cabeSearch />
    <!-- search wrapper -->

    <!-- top header -->
    <cabeTopHeader />
    <!-- top header --> 

    <slot />

    <!-- footer wrapper -->
    <cabeFooter/>
    <!-- footer wrapper -->

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import cabeLoader from '@/components/cabe-loader'
import cabeSearch from '@/components/cabe-search'
import cabeTopHeader from '@/components/cabe-top-header'
import cabeFooter from '@/components/cabe-footer'

export default {
  components:{
    cabeLoader,
    cabeSearch,
    cabeTopHeader,
    cabeFooter
  }
}
</script>

<style>

</style>
