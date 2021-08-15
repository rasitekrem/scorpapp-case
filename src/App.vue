<template>
  <v-app class="">
    <v-navigation-drawer app v-model="drawer" :right="isMobile">
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <v-app-bar-nav-icon
        class="order-md-first order-last"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title> Sayfa Adı</v-toolbar-title>
      <v-spacer />
      <app-user-control :user="user" :is-mobile="isMobile"></app-user-control>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import AppUserControl from "./components/AppUserControl";
export default {
  name: "App",
  components: {
    AppUserControl,
  },
  created() {
    this.$i18n.locale = this.$store.getters["getLang"];
  },
  data: () => ({
    drawer: window.screen.width >= 576,
  }),
  computed: {
    isMobile() {
      return window.screen.width < 576;
    },
    user() {
      return this.$store.getters["getUser"];
    },
  },
};
</script>
