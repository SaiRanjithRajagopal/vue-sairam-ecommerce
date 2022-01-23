<template>
  <div class="container-container-fluid">
    <div class="row wrapper">
      <div class="col-10 col-lg-5">
        <form class="shadow-lg">
          <h1 class="mb-3" id="forgotPasswordHeader">Forgot Password</h1>
          <br />
          <div class="form-group">
            <label for="email_field">Enter Email</label>
            <input
              type="email"
              id="email_field"
              class="form-control"
              placeholder="Email address"
              required
            />
          </div>

          <button
            id="forgot_password_button"
            type="submit"
            class="btn btn-block py-3"
          >
            Send Email
          </button>

          <br />
          <br />
          <div class="row" style="marginbottom: -40">
            <div class="col">
              <router-link to="login" type="button" style="color: 'black'"
                >Login</router-link
              >
            </div>
            <div class="col"></div>
            <div class="col">
              <router-link
                to="register"
                class="float-right mb-4"
                type="button"
                style="color: 'black', marginLeft: 70"
                >Create Account</router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class CheckAccess extends Vue {}
</script>

<style lang="scss"></style>
