<template>
  <div class="search_form">
    <input type="text" class="form-control" placeholder="Search here..." />
    <button class="" type="submit">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Search extends Vue {}
</script>
