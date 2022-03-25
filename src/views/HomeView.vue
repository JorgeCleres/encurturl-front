<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="Welcome to Your Vue.js App"/>
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
    Form
  }
}
</script>
