<template>
  <article class="cardportrait">
    <h2 class="cardportrait__title">Title</h2>
    <p class="cardportrait__subtitle">Subtitle</p>
    <div class="cardportrait__container">
      <figure
        v-for="(mansion, index) in mansions"
        :key="mansion.id"
        :index="index"
        class="cardportrait__figure"
      >
        <img
          src="../../assets/images/house1.jpg"
          alt="photo maison"
          class="cardportrait__img"
        />
        <figcaption></figcaption>
        <Button :house="mansion" />
      </figure>
    </div>
  </article>
</template>

<script>
/* eslint-disable */
import Button from "@/components/Button";
import { mapMutations } from "vuex";
export default {
  components: {
    Button,
  },

  computed: {
    mansions() {
      return this.$store.state.houses.slice(4, 7);
    },
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
};
</script>