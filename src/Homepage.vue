<template>
  <v-container>
    <Header homepage :greeting="generateGreetings" />
  </v-container>
</template>
<script>
import Header from "@/components/Header.vue";
import moment from "moment";

export default {
  name: "HomePage",
  components: {
    Header,
  },
  computed: {
    generateGreetings() {
      var currentHour = moment().format("HH");
      if (currentHour >= 3 && currentHour < 12) {
        return "Good Morning";
      } else if (currentHour >= 12 && currentHour < 15) {
        return "Good Afternoon";
      } else if (currentHour >= 15 && currentHour < 20) {
        return "Good Evening";
      } else if (currentHour >= 20 && currentHour < 3) {
        return "Good Night";
      } else {
        return "Hello";
      }
    },
  },
};
</script>