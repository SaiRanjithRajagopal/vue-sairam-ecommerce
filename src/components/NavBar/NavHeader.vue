<template>
  <div>
    <div>
      <header class="header_section">
        <div class="header_top">
          <div class="container-fluid">
            <div class="top_nav_container">
              <Contact />
              <SearchProduct />
              <UserAccount />
            </div>
          </div>
        </div>
        <div class="header_bottom">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">
              <CompanyName />
              <NavigationMenu />
            </nav>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Contact from "@/components/NavBar/SubComponents/Contact.vue";
import SearchProduct from "@/components/NavBar/SubComponents/SearchProduct.vue";
import UserAccount from "@/components/NavBar/SubComponents/Cart_And_Login.vue";
import CompanyName from "@/components/NavBar/SubComponents/CompanyName.vue";
import NavigationMenu from "@/components/NavBar/SubComponents/NavigationMenu.vue";

@Options({
  components: {
    Contact,
    SearchProduct,
    UserAccount,
    CompanyName,
    NavigationMenu,
  },
})
export default class NavHeader extends Vue {}
</script>
