<template>
  <div class="home">
    <Logo />
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'HomeView',
  components: {
    Form,
    Logo
  }
}
</script>

<style lang="scss" scoped>
  .home {
    background-image: url('../assets/images/desktop.png');
    background-size: cover;
    display: flex;
    height: 100vh;
    width: 100vw;
  } 

  @media(max-width: 600px) {
    .home {
      background-image: url('../assets/images/mobile.png');
      display: grid;
    } 
  }
</style>
