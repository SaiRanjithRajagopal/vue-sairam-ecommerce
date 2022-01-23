<template>
  <div>
    <section class="product_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Our Products</h2>
        </div>
        <div class="row">
          <div class="col-12">
            <ProductInfo products="{products}" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductInfo from "@/components/Products/Get/ProductGrid/ProductInfo.vue";

@Options({
  components: { ProductInfo },
})
export default class DisplayProducts extends Vue {}
</script>

<style lang="scss">
.onMouseHover {
  cursor: pointer;
}
</style>
