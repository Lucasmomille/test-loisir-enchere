<template>
  <div class="product">
    <div v-if="house" class="product__container">
      <figure class="product__figure">
        <img
          :src="house.pictures[0].url"
          alt="photo maison"
          class="product__img"
        />
        <figcaption>
          {{ house.description }}
        </figcaption>
      </figure>
    </div>
    <div v-else>
      <PageNotFound />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PageNotFound from "@/components/PageNotFound";
import { mapState } from "vuex";

export default {
  data() {
    return {
      hover: false,
    };
  },
  components: {
    PageNotFound,
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
