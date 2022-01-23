<template>
  <div>
    <div class="contact_nav">
      <a href="#">
        <i class="fa fa-envelope" aria-hidden="true" style="marginright: 5"></i>
        <span>Email : sairam@gmail.com</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Contact extends Vue {}
</script>
