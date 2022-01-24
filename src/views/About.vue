<template>
  <div>
    <section class="about_section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 ml-auto">
            <div class="detail-box pr-md-3">
              <div class="heading_container">
                <h2>We Provide Best For You</h2>
              </div>
              <p>
                Totam architecto rem beatae veniam, cum officiis adipisci soluta
                perspiciatis ipsa, expedita maiores quae accusantium. Animi
                veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio
                ab facilis sit labore officia! Repellat expedita, deserunt eum
                soluta rem culpa. Aut, necessitatibus cumque. Voluptas
                consequuntur vitae aperiam animi sint earum, ex unde cupiditate,
                molestias dolore quos quas possimus eveniet facilis magnam?
                Vero, dicta.
              </p>
              <router-link to="/">Read More</router-link>
            </div>
          </div>
          <div class="col-md-6 px-0">
            <div class="img-box">
              <img src="@/assets/Images/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="info_section">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="info_contact">
              <h5>
                <router-link to="/" class="nav-link navbar-brand">
                  <span>Minics</span></router-link
                >
              </h5>
              <p><i class="fa fa-map-marker" aria-hidden="true"></i>Address</p>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i>+01 1234567890
              </p>
              <p>
                <i class="fa fa-envelope" aria-hidden="true"></i>demo@gmail.com
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_info">
              <h5>Information</h5>
              <p>
                Eligendi sunt, provident, debitis nemo, facilis cupiditate velit
                libero dolorum aperiam enim nulla iste maxime corrupti ad illo
                libero minus.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_links">
              <h5>Useful Link</h5>
              <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <router-link to="/products">Products</router-link>
                </li>
                <li>
                  <router-link to="/whyus">WhyUs</router-link>
                </li>
                <li>
                  <router-link to="/testimonial">Testimonial</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_form">
              <h5>Newsletter</h5>
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <button type="button">Subscribe</button>
              </form>
              <div class="social_box">
                <router-link to="/">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </router-link>
                <router-link to="/">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </router-link>
                <router-link to="/">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </router-link>
                <router-link to="/">
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer_section">
      <div class="container">
        <p>&copy;<span id="displayYear"></span>All Rights Reserved By</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
