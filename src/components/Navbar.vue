<template>
  <nav>
      <div>
          <p>Hi display name</p>
          <p class="email">logged in as email</p>
      </div>
      <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity';
import {auth} from '../firebase/config';
export default {
    setup(){
        let error=ref(null);
        let logout=async()=>{
           try {
                await auth.signOut();
                console.log('user logged out');
               
           } catch (err) {
               error.value=err.message;
               console.log(err.value)
           }
        }
        return {logout};
    }
}
</script>

<style>

</style>