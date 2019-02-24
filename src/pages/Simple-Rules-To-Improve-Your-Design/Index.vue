<template>
  <Layout>
    <h1>Simple Rules To Improve Your Design</h1>
    <p>Looking for a few tips on how you can improve your design? Then this guide is perfect for you. It tackles basic rules for white space, color and typography.</p>

    <p>Fill out your email address below to get the PDF delivered directly to your inbox.</p>

    <SignupForm/>
  </Layout>
</template>

<script>
import SignupForm from '@/components/SignupForm'

export default {
  components: {
    SignupForm,
  },

  metaInfo: {
    title: 'Improve Your Design',
  },
}
</script>
