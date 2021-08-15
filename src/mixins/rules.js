export const rules = {
  methods: {
    required(field) {
      return (v) => !!v || this.$t("rules.required").replace("{field}", field);
    },
    maxCount(field, count) {
      return (v) =>
        (v && v.length <= count) ||
        this.$t("rules.maxCount")
          .replace("{max_count}", count)
          .replace("{field}", field);
    },
    minCount(field, count) {
      return (v) =>
        (v && v.length >= count) ||
        this.$t("rules.minCount")
          .replace("{min_count}", count)
          .replace("{field}", field);
    },
    isEmail() {
      return (v) => /.+@.+\..+/.test(v) || this.$t("rules.isEmail");
    },
  },
};
