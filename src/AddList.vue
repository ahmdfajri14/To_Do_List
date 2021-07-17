<template>
  <v-container>
    <Header title="Create New To-do List" />
    <ToDo />
  </v-container>
</template>
<script>
import Header from "@/components/Header.vue";
import ToDo from "@/components/ToDo.vue";
export default {
  name: "AddList",
  components: {
    Header,
    ToDo,
  },
  computed: {},
};
</script>