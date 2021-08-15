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
                :rules="[
                  required($t('login.title')),
                  maxCount($t('login.title'), 10),
                ]"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="formData.name"
                :label="$t('login.name')"
                :rules="[
                  required($t('login.name')),
                  minCount($t('login.name'), 3),
                ]"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="formData.surname"
                :label="$t('login.surname')"
                :rules="[
                  required($t('login.surname')),
                  minCount($t('login.surname'), 3),
                ]"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formData.email"
                :label="$t('login.email')"
                :rules="[required($t('login.email')), isEmail()]"
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
                :rules="[
                  required($t('login.password')),
                  minCount($t('login.password'), 6),
                ]"
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
import { rules } from "@/mixins/rules";
export default {
  mixins: [rules],
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
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
