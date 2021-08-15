<template>
  <div>
    <v-menu v-model="menu" bottom offset-y rounded="0" @click.native.stop>
      <template #activator="{ on }">
        <v-list-item dense :disabled="menu" two-line v-on="on">
          <v-list-item-avatar>
            <v-btn
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
            <v-list-item-title v-text="user.name + ' ' + user.surname" />
            <v-list-item-subtitle v-text="user.email" />
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list dense elevation="0">
        <v-list-item @click="handleLogout()">
          <v-list-item-title class="fs-x-large"> Çıkış Yap </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters["getUser"];
    },
  },
  methods: {
    handleProfile() {
      this.$router.push("/community/" + this.$auth.user.id);
    },
    handleSettings() {
      this.$router.push("/account");
    },
    handleLogout() {
      this.$store.commit("setUser", null);
    },
  },
};
</script>

<style scoped>
.user-menu {
  cursor: pointer;
}
</style>
