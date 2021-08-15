<template>
  <div class="d-flex align-items-center mr-5">
    <v-select
      :items="languages"
      v-model="selectedLang"
      item-value="id"
      dense
      hide-details
      solo
    ></v-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLang: this.$i18n.locale,
    };
  },
  computed: {
    languages() {
      return [
        { id: "tr", text: this.$t("lang.tr") },
        {
          id: "en",
          text: this.$t("lang.en"),
        },
      ];
    },
  },
  watch: {
    selectedLang: {
      handler(val) {
        this.$i18n.locale = val;
        this.$store.commit("setLang", val);
      },
    },
  },
};
</script>
