<template>
  <NuxtLink :to="'/' + house.id">
    <button class="button">{{ house.title }}</button>
  </NuxtLink>
</template>

<script>
/* eslint-disable */
/* iterer sur house title */
export default {
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
};
</script>