<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="display email" v-model="email">
      <input type="password" placeholder="display password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let displayName=ref("")
        let email=ref("")
        let password=ref("")

        let signUp=()=>{
            console.log(displayName.value,email.value,password.value)
        }

        return {displayName,email,password,signUp};
    }
}
</script>

<style>

</style>