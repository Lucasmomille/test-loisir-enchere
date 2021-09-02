<template>
  <section class="container">
    <div class="hero">
      <h1 class="hero__tile">Ici des maisons</h1>
    </div>
    <div class="cards">
      <div
        v-for="(house, index) in houses"
        :key="house.id"
        :index="index"
        :house="house"
        class="cards__container"
      >
        <CardHero v-if="index === 0" :house="house" />
        <CardLand v-if="index === 3 || index === 7" :house="house" />
        <CardPortrait v-if="index === 4" :house="house" />
      </div>
      <CardLand />
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
    houses() {
      return this.$store.state.houses;
    },
  },

  methods: {},

  mounted() {
    this.$store.dispatch("getHouses");
  },
};
</script>
