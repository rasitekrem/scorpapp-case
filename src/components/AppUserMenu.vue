<template>
  <div>
    <v-menu
      v-model="menu"
      bottom
      content-class="elevation-0 user-profile-menu-content"
      offset-y
      rounded="0"
      @click.native.stop
    >
      <template #activator="{ on }">
        <v-list-item
          class="user-profile-menu"
          :class="menu ? 'user-profile-menu-active' : ''"
          dense
          :disabled="menu"
          two-line
          v-on="on"
        >
          <v-list-item-avatar>
            <v-img
              v-if="me.image_medias"
              class="position-relative"
              :lazy-src="me.image_medias.full_url"
              :src="me.image_medias.full_url"
            />
            <v-btn
              v-else
              class="mx-2"
              color="indigo"
              dark
              depressed
              fab
              height="42"
              small
              width="42"
              v-on="on"
            >
              <v-icon dark> mdi-account </v-icon>
            </v-btn>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="fs-xx-large" v-text="me.full_name" />
            <v-list-item-subtitle class="fs-medium" v-text="me.email" />
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list class="user-profile-menu-list" dense elevation="0">
        <v-list-item @click="handleProfile">
          <v-list-item-title class="fs-x-large"> Profilim </v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleSettings">
          <v-list-item-title class="fs-x-large">
            Hesap Ayarları
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleLogout()">
          <v-list-item-title class="fs-x-large"> Çıkış Yap </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { endpoints } from "~/lib/api";
export default {
  props: {
    me: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    handleProfile() {
      this.$router.push("/community/" + this.$auth.user.id);
    },
    handleSettings() {
      this.$router.push("/account");
    },
    handleLogout() {
      this.$axios.$post(endpoints.session.logout).then(() => {
        localStorage.clear();
        sessionStorage.clear();
        document.cookie =
          "auth._token.password_grant=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
      });
    },
  },
};
</script>

<style scoped>
.user-menu {
  cursor: pointer;
}
</style>
