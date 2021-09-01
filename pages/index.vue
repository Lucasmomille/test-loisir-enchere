<template>
  <section class="container">
    <div class="hero">
      <h1 class="hero__tile">Ici des maisons</h1>
    </div>
    <div class="cards">
      //card avec buttons
      <div>
        <Button
          v-for="(house, index) in firstHouses"
          :key="house.id"
          :index="index"
          :house="house"
        />
      </div>
      <Article
        v-for="(house, index) in houses"
        :key="house.id"
        :index="index"
        :house="house"
      />
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import Article from "@/components/Article";
import { mapState } from "vuex";
export default {
  components: {
    Article,
  },
  /* data() {
    return {
      houses: data.results,
    };
  }, */

  computed: {
    houses() {
      return this.$store.state.houses;
      //return this.$store.state.houses.slice(3);
    },
    firstHouses() {
      return this.$store.state.houses.slice(0, 3);
    },
  },

  methods: {},

  mounted() {
    //console.log(houses);
    this.$store.dispatch("getHouses");
  },
};
</script>
