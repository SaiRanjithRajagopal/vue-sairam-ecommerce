<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/products" class="nav-link">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/whyus" class="nav-link">Why Us</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/testimonial" class="nav-link"
          >Testimonial</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class NavigationMenu extends Vue {}
</script>

<style lang="scss">
.overrideCss_NavBar_DropDownMenu {
  color: black;
  text-decoration: none;
  background-color: none;
  font-weight: bold;
  text-transform: none;
}

.nav-item > a {
  padding: 10px 25px;
  text-align: center;
  display: block;
  color: white;
}

.router-link-active {
  display: block;
  color: #f3c93e;
}
</style>
