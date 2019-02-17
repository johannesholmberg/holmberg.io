<template>
  <Layout>
    <article>
      <h1>{{ $page.post.title }}</h1>
      <div class="content-wrap" v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader,
  },

  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<page-query>
query Post ($path: String!) {
  post: markdownPage (path: $path) {
    title
    content
  }
}
</page-query>
