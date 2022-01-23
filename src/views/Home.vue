<template>
  <div>
    <HomeBody />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeBody from "@/components/Home/Body.vue";

@Options({
  components: { HomeBody },
})
export default class Home extends Vue {}
</script>
