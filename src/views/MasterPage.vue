<template>
  <div>
    <NavBar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar/NavHeader.vue";
import HomeView from "@/views/Home.vue";

@Options({
  components: { NavBar, HomeView },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "./src/assets/CSS/MasterPage/MasterPage.scss";
</style>
