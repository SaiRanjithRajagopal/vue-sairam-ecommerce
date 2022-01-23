<template>
  <div>
    <VerifyLogin />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import VerifyLogin from "@/components/UserAccount/Login/CheckAccess.vue";

@Options({
  components: { VerifyLogin },
})
export default class Login extends Vue {}
</script>

<style lang="scss"></style>
