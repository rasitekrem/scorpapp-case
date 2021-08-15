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
    <v-btn
      v-if="!user"
      class="px-5 mr-2"
      color="success"
      small
      @click="openLoginModal"
      >{{ $t("login.loginBtn") }}</v-btn
    >
    <AppUserMenu v-if="user" />
    <v-dialog v-model="dialog" persistent max-width="600px">
      <AppLoginModal @closeLoginDialog="dialog = false" />
    </v-dialog>
  </div>
</template>
<script>
import AppUserMenu from "./AppUserMenu";
import AppLoginModal from "./AppLoginModal";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    AppUserMenu,
    AppLoginModal,
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
  methods: {
    openLoginModal() {
      this.dialog = true;
    },
  },
};
</script>
