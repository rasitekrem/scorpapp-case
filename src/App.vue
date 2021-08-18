<template>
  <v-app class="">
    <v-navigation-drawer app v-model="drawer" right>
      <v-list dense nav>
        <v-list-item>
          <app-user-control :user="user"></app-user-control>
        </v-list-item>
        <v-list-item>
          <AppLanguageSwitcher />
        </v-list-item>
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
      <v-card-title>
        <v-icon class="mr-3">mdi-sine-wave</v-icon>
        <span>{{ $t($route.name) }}</span>
      </v-card-title>
      <v-spacer></v-spacer>
      <div class="d-sm-flex d-none">
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
      </div>
      <div class="d-sm-block d-none">
        <AppLanguageSwitcher />
      </div>
      <div class="d-sm-block d-none">
        <app-user-control :user="user"></app-user-control>
      </div>

      <v-app-bar-nav-icon
        class="d-sm-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-card elevation="0">
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
    drawer: false,
  }),
  computed: {
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
