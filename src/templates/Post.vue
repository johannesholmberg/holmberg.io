<template>
  <Layout>
    <article>
      <PageHeader
        :description="$page.post.description"
        :title="$page.post.title"
      />
      <figure>
        <g-image :src="$page.post.featuredImage"/>
      </figure>

      <div class="content-wrap" v-html="$page.post.content"/>

      <aside class="sidebar">
        <ul class="sidebar__meta">
          <li class="sidebar__meta-item">
            <strong>Role:</strong>
            {{ $page.post.role }}
          </li>
          <li class="sidebar__meta-item">
            <strong>Tech:</strong>
            {{ $page.post.tech }}
          </li>
          <li class="sidebar__meta-item">
            <strong>Client:</strong>
            {{ $page.post.client }}
          </li>
          <li class="sidebar__meta-item">
            <strong>Website: &nbsp;</strong>
            <a :href="$page.post.website">{{ $page.post.website }}</a>
          </li>
        </ul>
      </aside>
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
  post: post (path: $path) {
    title
    description
    featuredImage
    content
    role
    tech
    client
    website
  }
}
</page-query>
