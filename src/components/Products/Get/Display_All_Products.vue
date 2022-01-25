<template>
  <div>
    <div v-show="spinner" class="positionCenter">
      <ProgressSpinner />
    </div>
    <div v-show="!spinner">
      <section class="product_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>Our Products</h2>
          </div>
          <div class="row">
            <template v-for="(productEach, index) in products" :key="index">
              <ProductInfo :product="productEach" />
            </template>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//
import ProductInfo from "@/components/Products/Get/ProductDetails/ProductInfo.vue";
//
import { Products } from "@/domain.models/Product.Domain";
import { ProductDomainEvents } from "@/domain.events/Products.DomainEvents";

@Options({
  components: { ProductInfo },
})
export default class DisplayProducts extends Vue {
  products: Products[] | null = null;
  spinner: boolean | null = true;

  async created(): Promise<void> {
    let productModule = new ProductDomainEvents();
    this.products = await productModule.GetProduct_DomainEvents();
    this.spinner = false;
  }
}
</script>

<style lang="scss">
.onMouseHover {
  cursor: pointer;
}

.positionCenter {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 200px;
  height: 200px;
}
</style>
