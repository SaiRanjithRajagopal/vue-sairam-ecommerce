<template>
  <div class="container container-fluid">
    <div class="row wrapper">
      <div class="col-10 col-lg-5">
        <form class="shadow-lg">
          <h1 class="mb-3">Register</h1>

          <div class="form-group">
            <label htmlFor="email_field">Name</label>
            <input
              type="name"
              id="name_field"
              class="form-control"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <br />
          <div class="form-group">
            <label htmlFor="email_field">Email</label>
            <input
              type="email"
              id="email_field"
              class="form-control"
              placeholder="Email address"
              required
              name="email"
            />
          </div>
          <br />
          <div class="form-group">
            <label htmlFor="password_field">Password</label>
            <input
              type="password"
              id="password_field"
              class="form-control"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button id="register_button" type="submit" class="btn btn-block py-3">
            REGISTER
          </button>
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
export default class Register extends Vue {}
</script>

<style lang="scss"></style>
