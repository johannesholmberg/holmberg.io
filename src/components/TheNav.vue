<template>
  <nav class="nav-global">

    <ul class="nav-global__list">
      <li class="nav-global__item">
        <g-link
          to="/"
          exact
          class="nav-global__link"
          active-class="nav-global__link--active"
        >
          Home
        </g-link>
      </li>

      <li class="nav-global__item">
        <g-link
          to="/about"
          exact
          class="nav-global__link"
          active-class="nav-global__link--active"
        >
          About
        </g-link>
      </li>

      <li class="nav-global__item">
        <a
          href="https://johanneswrites.com"
          class="nav-global__link"
          isActive={checkPost}
          active-class="nav-global__link--active"
        >
          Blog
        </a>
      </li>

      <li class="nav-global__item">
        <g-link
          to="/work"
          class="nav-global__link "
          active-class="nav-global__link--active"
        >
          Work
        </g-link>
      </li>

      <li class="nav-global__item">
        <g-link
          to="/projects"
          class="nav-global__link "
          active-class="nav-global__link--active"
        >
          Projects
        </g-link>
      </li>

      <li class="nav-global__item">
        <g-link
          to="/contact"
          class="nav-global__link "
          active-class="nav-global__link--active"
        >
          Contact
        </g-link>
      </li>
    </ul>
  </nav>

</template>

<script>
export default {}
</script>

<style scoped>
</style>