<template>
  <NuxtLink :to="'/' + house.id">
    <button class="button">{{ house.title }}</button>
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