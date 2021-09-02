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
          :src="mansion.pictures[0].url"
          alt="photo maison"
          class="cardportrait__img"
        />
        <figcaption class="cardportrait__figcaption">
          <p>{{ mansion.title }}</p>
          <Button :house="mansion" />
        </figcaption>
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
  props: {
    house: {
      type: Object,
      required: true,
    },
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