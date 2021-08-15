<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">{{ $t("login.label") }}</span>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="closeLoginDialog"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="loginForm">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="formData.title"
                :label="$t('login.title')"
                :rules="titleRules"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col sm="12" md="6">
              <v-text-field
                v-model="formData.name"
                :label="$t('login.name')"
                :rules="nameRules"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col sm="12" md="6">
              <v-text-field
                v-model="formData.surname"
                :label="$t('login.surname')"
                :rules="surnameRules"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formData.email"
                :label="$t('login.email')"
                :rules="emailRules"
                required
                dense
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formData.password"
                :label="$t('login.password')"
                type="password"
                :rules="passwordRules"
                required
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions class="pt-0 pb-5">
      <v-btn class="mx-auto px-5 mt-0" small color="primary" @click="submit">
        {{ $t("login.loginBtn") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        title: "",
        name: "",
        surname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    closeLoginDialog() {
      this.$refs.loginForm.reset();
      this.$emit("closeLoginDialog");
    },
    submit() {
      if (this.$refs.loginForm.validate()) {
        this.$store.dispatch("login", this.formData).then(() => {
          this.closeLoginDialog();
        });
      }
    },
  },
  computed: {
    titleRules() {
      return [
        (v) => !!v || this.$t("loginRules.titleRules.required"),
        (v) =>
          (v && v.length < 10) ||
          this.$t("loginRules.titleRules.maxCount").replace("{max_count}", 10),
      ];
    },
    nameRules() {
      return [
        (v) => !!v || this.$t("loginRules.nameRules.required"),
        (v) =>
          (v && v.length >= 3) ||
          this.$t("loginRules.nameRules.minCount").replace("{min_count}", 3),
      ];
    },
    surnameRules() {
      return [
        (v) => !!v || this.$t("loginRules.surnameRules.required"),
        (v) =>
          (v && v.length >= 3) ||
          this.$t("loginRules.surnameRules.minCount").replace("{min_count}", 3),
      ];
    },
    emailRules() {
      return [
        (v) => !!v || this.$t("loginRules.emailRules.required"),
        (v) => /.+@.+\..+/.test(v) || this.$t("loginRules.emailRules.valid"),
      ];
    },
    passwordRules() {
      return [
        (v) => !!v || this.$t("loginRules.passwordRules.required"),
        (v) =>
          (v && v.length >= 6) ||
          this.$t("loginRules.passwordRules.minCount").replace(
            "{min_count}",
            6
          ),
      ];
    },
  },
};
</script>
