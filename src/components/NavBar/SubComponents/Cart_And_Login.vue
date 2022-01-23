<template>
  <div class="user_option_box">
    <a href="#">
      <span style="color: '#f3c93e', fontWeight: 'bold'">2</span>
      <span>Cart</span>
    </a>
    <router-link to="/login"
      ><i class="fa fa-user" aria-hidden="true"></i>
      <span>Login</span></router-link
    >
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class LoginCart extends Vue {}
</script>
