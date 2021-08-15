<template>
  <div
    v-if="!isMobile"
    class="
      d-flex
      justify-content-between
      align-items-center
      order-md-last order-first
    "
  >
    <v-btn v-if="!user" class="px-5 mr-2" color="success" small
      >Giriş Yap</v-btn
    >
    <AppUserMenu v-if="user" />
  </div>
</template>
<script>
import AppUserMenu from "./AppUserMenu";
export default {
  components: {
    AppUserMenu,
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
