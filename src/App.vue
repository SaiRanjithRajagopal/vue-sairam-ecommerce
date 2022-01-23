<template>
  <div id="nav">
    <MasterPage />
    <RouterNavigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MasterPage from "@/views/MasterPage.vue";

@Options({
  components: { MasterPage },
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
