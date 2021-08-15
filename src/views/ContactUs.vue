<template>
  <v-card>
    <v-card-title class="w-100">
      <span class="mx-auto">{{ $t("contactUs.label") }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="contactUsForm">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="formData.title"
                :label="$t('contactUs.title')"
                :rules="[
                  required($t('contactUs.title')),
                  minCount($t('contactUs.title'), 5),
                ]"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col sm="12">
              <v-text-field
                v-model="formData.name"
                :label="$t('contactUs.name')"
                :rules="[
                  required($t('contactUs.name')),
                  minCount($t('contactUs.name'), 3),
                ]"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formData.email"
                :label="$t('contactUs.email')"
                :rules="[required($t('contactUs.email')), isEmail()]"
                required
                dense
                outlined
              ></v-text-field>
            </v-col>
            <v-col sm="12">
              <v-text-field
                v-model="formData.phonenumber"
                :label="$t('contactUs.phonenumber')"
                :rules="[
                  required($t('contactUs.phonenumber')),
                  isNumber($t('contactUs.phonenumber')),
                ]"
                outlined
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                :label="$t('contactUs.country')"
                v-model="formData.country_code"
                :rules="[required($t('contactUs.country'))]"
                :items="countries"
                item-text="name"
                item-value="id"
                dense
                outlined
              >
                <template v-slot:selection="data">
                  {{ $t(data.item.name) }}
                </template>
                <template v-slot:item="data">
                  {{ $t(data.item.name) }}
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="formData.text"
                outlined
                :rules="[
                  required($t('contactUs.text')),
                  maxCount($t('contactUs.text'), 1000),
                ]"
                counter="1000"
                required
                dense
                :label="$t('contactUs.text')"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" small class="mr-5 ml-auto" @click="submit">
        Gönder
      </v-btn>
    </v-card-actions>
    <v-snackbar v-model="snackbar">
      {{ $t("contactUs.successMessage") }}

      <template v-slot:action="{ attrs }">
        <v-btn color="success" text v-bind="attrs" @click="snackbar = false">
          {{ $t("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
import countries from "@/lib/countries";
import { rules } from "@/mixins/rules";
export default {
  mixins: [rules],
  data() {
    return {
      formData: {
        title: "",
        name: "",
        phonenumber: "",
        email: "",
        country_code: "",
        text: "",
      },
      countries,
      snackbar: false,
    };
  },
  created() {
    const user = this.$store.getters["getUser"];
    if (user) {
      this.formData.name = user.name;
      this.formData.email = user.email;
    }
  },
  methods: {
    submit() {
      if (this.$refs.contactUsForm.validate()) {
        console.log({ ...this.formData });
        this.snackbar = true;
        this.$refs.contactUsForm.reset();
      }
    },
  },
};
</script>
