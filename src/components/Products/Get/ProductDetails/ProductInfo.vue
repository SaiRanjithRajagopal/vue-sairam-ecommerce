<template>
  <div class="col-sm-6 col-lg-4">
    <div class="box">
      <div class="img-box">
        <img :src="product.image" alt="about-img.jpg" />
      </div>
      <div class="detail-box">
        <h5 class="productHeight">{{ product.description }}</h5>
        <div class="product_info">
          <h5><span>$</span>{{ product.price }}</h5>
          <div class="star_container">
            <DisplayRatings :rating="product.rating" />
          </div>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <router-link
                :to="'/getproduct/id=' + product.id"
                type="button"
                class="btn btn-danger positionLeft"
                >View Details</router-link
              >
            </td>
            <td style="width: 40"></td>
            <td>
              <router-link
                to="/"
                type="button"
                class="btn btn-warning positionRight"
                >Add To Cart</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Products } from "@/domain.models/Product.Domain";
import DisplayRatings from "@/components/Products/Get/ProductDetails/DisplayRatings.vue";

@Options({
  components: { DisplayRatings },
  props: {
    product: { type: Object },
  },
})
export default class ProductInfo extends Vue {
  product: Products | null = null;
}
</script>

<style lang="scss">
.onMouseHover {
  cursor: pointer;
}

.productHeight {
  position: relative;
  height: 275px;
}

.positionLeft {
  float: left;
}

.positionRight {
  float: right;
}
</style>
