<template>
  <Layout>
    <h1>Projects</h1>
    <p>Side hustles and fun projects.</p>

    <ProjectItem
      image="bookshelf.png"
      title="bookshelf.holmberg.io"
      url="https://bookshelf.holmberg.io"
    >
      <p>95% of the books I read is done on the Kindle. I love the experience of reading and highlighting on it, which
        <a
          href="https://johanneswrites.com//2015/08/that-wonderful-habit-of-reading"
        >I wrote about here.</a> The only downside for me is that I have no real overview of the books I’ve read in the past. That’s why I created this little site where I can keep a book archive with their respective highlights, notes and thoughts.
      </p>
    </ProjectItem>
  </Layout>
</template>

<script>
import ProjectItem from '@/components/ProjectItem'
export default {
  components: {
    ProjectItem,
  },

  metaInfo: {
    title: 'Projects',
  },
}
</script>
