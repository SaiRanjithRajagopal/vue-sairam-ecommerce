<template>
  <div class="row">
    <div class="col">
      <div class="product__details__pic">
        <div>
          <img class="d-block w-50" :src="product?.image" alt="" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="product__details__text">
        <h3 class="h1">{{ product?.description }}</h3>
        <p class="productId_FontSize">Product Id: {{ product?.id }}</p>
        <!-- <div class="product__details__rating">
          <DisplayRatings :rating="product?.rating" />
        </div> -->
        <div class="product__details__price">${{ product?.price }}</div>
        <p>{{ product?.description }}</p>
      </div>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <button class="btn btn-danger">-</button>
            </div>
            <div class="col">
              <input type="text" class="form-control" />
            </div>
            <div class="col">
              <button class="btn btn-primary">+</button>
            </div>
          </div>
        </div>
        <div class="col-5"></div>
        <div class="col">
          <router-link to="/" type="button" class="btn btn-warning"
            >Add to Cart</router-link
          >
        </div>
      </div>
      <div class="product__details__text">
        <ul>
          <li><b>Seller Name </b><span>Amazon</span></li>
          <li><b>Availability </b><span class="greenColor">Available</span></li>
          <li>
            <b> Shipping </b>
            <span>01 day shipping. <samp>Free pickup today</samp></span>
          </li>
        </ul>
      </div>
      <br />
      <div class="row">
        <div class="col text-center">
          <button type="button" class="btn btn-warning">Add Ratings</button>
          <Bootstrap_Modal
            show="{show}"
            handleClose="{handleClose}"
            handleSave="{handleSave}"
          >
            <!-- <AddRatings ratingChanged="{ratingChanged}" /> -->
          </Bootstrap_Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Products } from "@/domain.models/Product.Domain";
import { useProductStore } from "@/store/Product.State";
import { ProductDomainEvents } from "@/domain.events/Products.DomainEvents";
import DisplayRatings from "@/components/Products/Get/ProductDetails/DisplayRatings.vue";

@Options({
  components: { DisplayRatings },
})
export default class Get_Single_Product extends Vue {
  url_data: string | string[] | undefined = undefined;
  product: Products | null = null;
  productStore = useProductStore();

  async created(): Promise<void> {
    //Define the Product Events
    let productDomainEvents = new ProductDomainEvents();
    //Fetch the Product from service
    await productDomainEvents.GetSingleProduct_DomainEvents(
      this.$route.params.id
    );
    //Get the Product from store
    this.product = await productDomainEvents.GetSingleProducts_FromStore();
  }
}
</script>

<style lang="scss">
.greenColor {
  color: green;
  font-weight: bold;
}

.redColor {
  color: red;
  font-weight: bold;
}

.productId_FontSize {
  font-size: 13;
}

.spad {
  padding-top: 100px;
  padding-bottom: 100px;
}

.product-details {
  padding-top: 80px;
}

.product__details__pic__item {
  margin-bottom: 20px;
}

.product__details__pic__item img {
  min-width: 100%;
}

.product__details__pic__slider img {
  cursor: pointer;
}

.product__details__pic__slider.owl-carousel .owl-item img {
  width: auto;
}

.product__details__text h3 {
  color: #252525;
  font-weight: 700;
  margin-bottom: 16px;
}

.product__details__text .product__details__rating {
  font-size: 14px;
  margin-bottom: 12px;
}

.product__details__text .product__details__rating i {
  margin-right: -2px;
  color: #edbb0e;
}

.product__details__text .product__details__rating span {
  color: #dd2222;
  margin-left: 4px;
}

.product__details__text .product__details__price {
  font-size: 30px;
  color: #dd2222;
  font-weight: 600;
  margin-bottom: 15px;
}

.product__details__text p {
  margin-bottom: 45px;
}

.product__details__text .primary-btn {
  padding: 16px 28px 14px;
  margin-right: 6px;
  margin-bottom: 5px;
}

.product__details__text .heart-icon {
  display: inline-block;
  font-size: 16px;
  color: #6f6f6f;
  padding: 13px 16px 13px;
  background: #f5f5f5;
}

.product__details__text ul {
  border-top: 1px solid #ebebeb;
  padding-top: 40px;
  margin-top: 50px;
}

.product__details__text ul li {
  font-size: 16px;
  color: #1c1c1c;
  list-style: none;
  line-height: 36px;
}

.product__details__text ul li b {
  font-weight: 700;
  width: 170px;
  display: inline-block;
}

.product__details__text ul li span samp {
  color: #dd2222;
}

.product__details__text ul li .share {
  display: inline-block;
}

.product__details__text ul li .share a {
  display: inline-block;
  font-size: 15px;
  color: #1c1c1c;
  margin-right: 25px;
}

.product__details__text ul li .share a:last-child {
  margin-right: 0;
}

.product__details__quantity {
  display: inline-block;
  margin-right: 6px;
}

.pro-qty {
  width: 140px;
  height: 50px;
  display: inline-block;
  position: relative;
  text-align: center;
  background: #f5f5f5;
  margin-bottom: 5px;
}

.pro-qty input {
  height: 100%;
  width: 100%;
  font-size: 16px;
  color: #6f6f6f;
  width: 50px;
  border: none;
  background: #f5f5f5;
  text-align: center;
}

.pro-qty .qtybtn {
  width: 35px;
  font-size: 16px;
  color: #6f6f6f;
  cursor: pointer;
  display: inline-block;
}

.product__details__tab {
  padding-top: 85px;
}

.product__details__tab .nav-tabs {
  border-bottom: none;
  justify-content: center;
  position: relative;
}

.product__details__tab .nav-tabs:before {
  position: absolute;
  left: 0;
  top: 12px;
  height: 1px;
  width: 370px;
  background: #ebebeb;
  content: "";
}

.product__details__tab .nav-tabs:after {
  position: absolute;
  right: 0;
  top: 12px;
  height: 1px;
  width: 370px;
  background: #ebebeb;
  content: "";
}

.product__details__tab .nav-tabs li {
  margin-bottom: 0;
  margin-right: 65px;
}

.product__details__tab .nav-tabs li:last-child {
  margin-right: 0;
}

.product__details__tab .nav-tabs li a {
  font-size: 16px;
  color: #999999;
  font-weight: 700;
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 0;
}

.product__details__tab .product__details__tab__desc {
  padding-top: 44px;
}

.product__details__tab .product__details__tab__desc h6 {
  font-weight: 700;
  color: #333333;
  margin-bottom: 26px;
}

.product__details__tab .product__details__tab__desc p {
  color: #666666;
}
</style>
