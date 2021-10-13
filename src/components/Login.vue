<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
      <input type="email" placeholder="display email" v-model="email">
      <input type="password" placeholder="display password" v-model="password">
      <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let email=ref("")
        let password=ref("")

        let login=()=>{
            console.log(email.value,password.value)
        }

        return {email,password,login};
    }
}
</script>

<style>

</style>