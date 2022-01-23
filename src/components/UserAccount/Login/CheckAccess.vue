<template>
  <div class="container container-fluid">
    <div class="row wrapper">
      <div class="col-10 col-lg-5">
        <form class="shadow-lg" onSubmit="{loginHandler}">
          <h1 class="mb-3" id="loginHeader">Login</h1>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email_field"
              class="form-control"
              placeholder="Email Address"
            />
          </div>
          <br />
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password_field"
              class="form-control"
              placeholder="Password"
            />
          </div>

          <button
            id="login_btn"
            type="submit"
            class="btn btn-block py-3"
            style="fontweight: 'bold'"
          >
            Login
          </button>
          <br />
          <br />

          <div class="row">
            <div class="col">
              <router-link
                to="/forgotpassword"
                type="button"
                style="color: 'black'"
                >Forgot Password</router-link
              >
            </div>
            <div class="col"></div>
            <div class="col">
              <router-link
                to="/register"
                class="float-right mb-4"
                type="button"
                style="color: 'black', marginLeft: 20"
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

<style lang="scss">
@import "./src/assets/CSS/Login/CheckAccess.scss";
</style>
