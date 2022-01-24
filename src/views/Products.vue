<template>
  <div>
    <DisplayProduct />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DisplayProduct from "@/components/Products/Get/Display_All_Products.vue";

@Options({
  components: { DisplayProduct },
})
export default class Products extends Vue {}
</script>

<style lang="scss"></style>
