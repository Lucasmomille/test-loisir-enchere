<template>
  <article class="article w-full">
    <img
      src="../../assets/images/house1.jpg"
      alt="photo maison"
      class="article__img object-cover h-52 w-full"
    />
    <div class="article__txt flex flex-col p-2">
      <h2 class="article__title">Title</h2>
      <p class="article__subtitle">Subtitle</p>
      <div class="article__buttons">
        <Button
          v-for="(house, index) in firstHouses"
          :key="house.id"
          :index="index"
          :house="house"
        />
      </div>
    </div>
  </article>
</template>

<script>
/* eslint-disable */
import Button from "@/components/Button";
export default {
  components: {
    Button,
  },

  computed: {
    firstHouses() {
      return this.$store.state.houses.slice(0, 3);
    },
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
};
</script>