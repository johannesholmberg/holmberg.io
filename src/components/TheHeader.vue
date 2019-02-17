<template>
  <header class="header-global">
    <div class="header-global__text">
      <h1 class="header-global__title">
        <span>Johannes </span>
        <span>Holmberg</span>
      </h1>
      <p class="header-global__description">
        UI developer & designer
      </p>
    </div>
    <TheNav />
  </header>
</template>

<script>
import TheNav from './TheNav'

export default {
  components: {
    TheNav,
  },
}
</script>
