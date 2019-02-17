<template>
  <header class="page-header">
    <h1 class="page-header__title">{{ title }}</h1>
    <p class="page-header__subtitle">{{ description }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
</style>