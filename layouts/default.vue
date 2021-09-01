<template>
  <div class="layout p-2 min-h-screen font-roboto pb-8">
    <Nuxt />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  head: {
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "default",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
      },
    ],
  },
};
</script>