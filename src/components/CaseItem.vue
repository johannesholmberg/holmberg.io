<template>
  <div class="case-item">
    <h2 class="case-item__title">{{ item.title }}</h2>
    <g-link :to="item.path" class="case-item__image-wrap">
      <g-image :src="item.featuredImage"/>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>