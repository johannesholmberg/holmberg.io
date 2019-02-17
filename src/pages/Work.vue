<template>
  <Layout>
    <h1>Work</h1>

    <p>This is a collection of the type of client work I do. Because of the type of clients I primarily work with, I’m only able to display a handful of projects on this site. If you would like to see more examples, please get in touch and I’d be happy to provide you with more insights.</p>

    <CaseItem
      :item="post.node"
      :key="index"
      v-for="(post, index) in $page.posts.edges"
    />
  </Layout>
</template>

<script>
import CaseItem from '@/components/CaseItem'
export default {
  components: {
    CaseItem,
  },

  metaInfo: {
    title: 'Work',
  },
}
</script>

<page-query>
query Posts {
  posts: allPost (perPage: 1000) {
    edges {
      node {
        title
        path
        featuredImage
        date(format: "MMMM Do, YYYY")
      }
    }
  }
}
</page-query>