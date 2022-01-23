<template>
  <div>
    <a href="#" class="nav-link navbar-brand">
      <router-link to="/" class="nav-link navbar-brand"
        ><span>Sairam E-Commerce</span></router-link
      >
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class=""> </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class CompanyName extends Vue {}
</script>
