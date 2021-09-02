<template>
  <article class="article w-full">
    <img
      :src="house.pictures[`${imageIndex}`].url"
      alt="photo maison"
      class="article__img object-cover h-52 w-full"
    />
    <div class="article__txt flex flex-col p-2">
      <h2 class="article__title">{{ house.title }}</h2>
      <p class="article__subtitle">Subtitle</p>
      <div class="article__buttons">
        <Button :house="house" />
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
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      imageIndex: 0,
    };
  },
};
</script>
