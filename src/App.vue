<template>
  <v-app class="">
    <v-navigation-drawer app v-model="drawer" :right="isMobile">
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
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
      <v-spacer />
      <AppLanguageSwitcher />
      <app-user-control :user="user" :is-mobile="isMobile"></app-user-control>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-card elevation="0">
          <v-card-title>
            {{ $t($route.name) }}
          </v-card-title>
          <v-card-text>
            <router-view></router-view>
          </v-card-text>
        </v-card>
        <!-- If using vue-router -->
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Raşit Ekrem Ataklı</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import AppUserControl from "./components/AppUserControl";
import AppLanguageSwitcher from "./components/AppLanguageSwitcher";
export default {
  name: "App",
  components: {
    AppUserControl,
    AppLanguageSwitcher,
  },
  created() {
    const lang = localStorage.getItem("lang");
    if (lang) {
      this.$i18n.locale = lang;
      this.$store.commit("setLang", lang);
    } else {
      this.$i18n.locale = this.$store.getters["getLang"];
    }
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
    items() {
      return [
        {
          icon: "mdi-home",
          title: this.$t("menu.home"),
          route: "/",
        },
        {
          icon: "mdi-card-account-mail",
          title: this.$t("menu.contactUs"),
          route: "/contact-us",
        },
      ];
    },
  },
};
</script>
