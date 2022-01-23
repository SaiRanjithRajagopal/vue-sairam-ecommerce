<template>
  <div class="box col-4">
    <div class="img-box">
      <img src="@/assets/Images/slider-img.png" alt="about-img.jpg" />
    </div>
    <div class="detail-box">
      <h5>product.name</h5>
      <div class="product_info">
        <h5><span>$</span>25.00</h5>
        <div class="star_container">
          <DisplayRatings
            ratings="{product.ratings}"
            reviews="{product.numofReviews}"
          />
        </div>
      </div>
    </div>
    <table>
      <tbody>
        <tr>
          <td>
            <router-link to="/" type="button" class="btn btn-danger"
              >View Details</router-link
            >
          </td>
          <td style="width: 40"></td>
          <td>
            <router-link to="/" type="button" class="btn btn-warning"
              >Add To Cart</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DisplayRatings from "@/components/Products/Get/ProductGrid/DisplayRatings.vue";

@Options({
  components: { DisplayRatings },
})
export default class ProductInfo extends Vue {}
</script>

<style lang="scss">
.onMouseHover {
  cursor: pointer;
}
</style>
