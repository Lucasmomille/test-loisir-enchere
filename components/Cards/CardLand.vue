<template>
  <div>
    <article v-if="house" class="article w-full">
      <img
        :src="house.pictures[`${imageIndex}`].url"
        alt="photo maison"
        class="article__img object-cover h-52 w-full"
      />
      <div class="article__txt flex flex-col p-2">
        <h2 class="article__title">{{ house.title }}</h2>
        <p class="article__subtitle">{{ house.subtitle }}</p>
        <div class="article__buttons">
          <Button :house="house" />
        </div>
      </div>
    </article>
    <article v-else class="article w-full">
      <img
        src="../../assets/images/house1.jpg"
        alt="photo maison"
        class="article__img object-cover h-52 w-full"
      />
      <div class="article__txt flex flex-col p-2">
        <h2 class="article__title">Title</h2>
        <p class="article__subtitle">Subtitle</p>
        <div class="article__buttons">
          <Button />
        </div>
      </div>
    </article>
  </div>
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
