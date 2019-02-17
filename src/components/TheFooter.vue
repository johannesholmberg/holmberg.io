<template>
  <footer class="footer-global">
    <p>Copyright &copy; 2007–{{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
</style>