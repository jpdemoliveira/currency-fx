<template>
  <v-container>
    <div>API Call Test</div>
  </v-container>
</template>

<script>
export default {
  name: "CurrencyMain",
  data: () => ({
    response: {},
  }),

  async mounted() {
    await this.$store
      .dispatch("cbModule/getCurrencyList", { type: "crypto" })
      .then((response) => {
        this.response = response.data;
      });
  },
};
</script>
