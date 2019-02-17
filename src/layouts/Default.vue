<template>
  <div class="page">
    <div class="a11y">
      <a class="skip-content visuallyhidden" href="#main">Skip to content</a>
    </div>

    <div class="layout-wrap">
      <TheHeader/>
      <main class="main-global" id="main">
        <div class="content-wrap">
          <slot/>
        </div>
      </main>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

