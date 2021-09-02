<template>
  <NuxtLink v-if="house" :to="'/' + house.id">
    <button class="button">{{ house.title }}</button>
  </NuxtLink>
  <NuxtLink v-else :to="'/'">
    <button class="button">Go Home</button>
  </NuxtLink>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
};
</script>