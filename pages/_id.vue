<template>
  <div class="product">
    <Product v-if="house" :house="house" />
    <div v-else>
      <PageNotFound />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PageNotFound from "@/components/PageNotFound";
import Product from "@/components/Product";
import { mapState } from "vuex";

export default {
  components: {
    PageNotFound,
    Product,
  },

  computed: {
    ...mapState(["houses"]),
    house() {
      return this.$store.getters.getHouseById(this.$route.params.id);
    },
  },

  mounted() {
    this.$store.dispatch("getHouses");
  },
};
</script>
