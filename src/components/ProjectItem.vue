<template>
  <div class="project-item">
    <h2 class="project-item__title">
      <a :href="url">{{ title }}</a>
    </h2>
    <div class="content-wrap">
      <a :href="url" class="project-item__image-wrap">
        <g-image :src="image" class="project-item__image"/>
      </a>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },
  },
}
</script>

