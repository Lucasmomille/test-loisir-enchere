<template>
  <div :class="{ product__container: !buy, product__container__mask: buy }">
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
    <div class="product__description">
      <h1>{{ house.title }}</h1>
      <p>{{ house.subtitle }}</p>
      <p class="product__tags">
        <span v-for="(tag, index) in house.tags" :key="index" :index="index">{{
          tag
        }}</span>
      </p>
      <p>{{ house.starting_price }} €</p>
      <button class="button__purchase" @click="buy = !buy" @submit.prevent>
        purchase
      </button>
    </div>
    <div v-show="buy" class="modale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="modale__close"
        @click="buy = false"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <p>Merci d'avoir acheté {{ house.title }}</p>
      <p>pour {{ house.starting_price }} €</p>
      <Button />
    </div>
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
  data() {
    return {
      buy: false,
    };
  },
};
</script>