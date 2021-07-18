<template>
  <v-container>
    <Header title="To-do List Details" />
    <CardDetail />
  </v-container>
</template>
<script>
import Header from "@/components/Header.vue";
import CardDetail from "@/components/CardDetail.vue";

export default {
  name: "DetailPage",
  components: {
    Header,
    CardDetail,
  },
};
</script>