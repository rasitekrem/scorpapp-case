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
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :label="$t('login.title')"
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col sm="12" md="6">
              <v-text-field
                :label="$t('login.name')"
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col sm="12" md="6">
              <v-text-field
                :label="$t('login.surname')"
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :label="$t('login.email')"
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :label="$t('login.password')"
                type="password"
                required
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
      valid: false,
      submitted: false,
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
      this.formData = {
        title: "",
        name: "",
        surname: "",
        email: "",
        password: "",
      };
      this.$emit("closeLoginDialog");
    },
    submit() {
      // submit login form
    },
  },
};
</script>
