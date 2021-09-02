<template>
  <section class="container">
    <div class="hero">
      <h1 class="hero__tile">Ici des maisons</h1>
    </div>
    <div class="cards">
      <CardHero />
      <CardLand
        v-for="(house, index) in houses"
        :key="house.id"
        :index="index"
        :house="house"
      />
      <CardPortrait />
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import CardLand from "@/components/Cards/CardLand";
import CardHero from "@/components/Cards/CardHero";
import CardPortrait from "@/components/Cards/CardPortrait";

export default {
  components: {
    CardLand,
    CardHero,
    CardPortrait,
  },

  computed: {
    Firsthouses() {
      return this.$store.state.houses.slice(0, 1);
    },
    houses() {
      return this.$store.state.houses.slice(3);
    },
    Forthhouses() {
      return this.$store.state.houses.slice(3, 1);
    },
  },

  methods: {},

  mounted() {
    //console.log(houses);
    this.$store.dispatch("getHouses");
  },
};
</script>
