<template>
  <div class="signup-form" id="mc_embed_signup">
    <form
      action="https://jholmberg.us4.list-manage.com/subscribe/post?u=35844afdf77b4da36cd5f6f70&amp;id=8b1304ac4e"
      class="validate"
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      novalidate
      target="_blank"
    >
      <div class="form-group">
        <input
          class="form-control"
          id="mce-FNAME"
          name="FNAME"
          placeholder="First Name"
          type="text"
          value
        >
      </div>

      <div class="form-group" id="mc_embed_signup_scroll">
        <input
          class="form-control"
          id="mce-EMAIL"
          name="EMAIL"
          placeholder="Email Address"
          required
          type="email"
          value
        >
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div aria-hidden="true" style="position: absolute; left: -5000px;">
          <input
            name="b_35844afdf77b4da36cd5f6f70_8b1304ac4e"
            tabindex="-1"
            type="text"
            value
          >
        </div>

        <div class="block">
          <input
            class="button"
            id="mc-embedded-subscribe"
            name="subscribe"
            type="submit"
            value="Get my PDF"
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.signup-form {
  margin: 1em 0 3em;
}

.form-control {
  padding: 0.5em 1em;
  margin-bottom: 1em;
  width: 320px;
  border: 2px solid #ccc;
  font-size: 1.125em;

  &:focus {
    border-color: #111;
    outline: none;
  }
}

.button {
  background-color: #2680c2;
  color: #fff;
  border-radius: 4px;
  border: 0;
  padding: 0.5em 2.25em;
  font-size: 1.125em;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #0f609b;
  }
}
</style>