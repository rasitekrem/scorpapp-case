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
    <v-btn v-else class="px-5" color="warning" small>Çıkış Yap</v-btn>
  </div>
</template>
<script>
export default {
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
