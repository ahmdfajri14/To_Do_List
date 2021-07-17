<template>
  <v-container>
    <Header
      homepage
      :greeting="generateGreetings"
      :numberOfList="dataList.length"
      :numberOfFinish="1"
    />
    <div v-if="dataList.length === 0" style="margin: 40px">
      <img
        style="margin-left: 50px; margin-top: 60px"
        src="@/assets/empty.svg"
        alt
      />
      <p style="font-size: 22px; color: #0045ff; text-align: center">No Task</p>
    </div>
    <CardList :dataList="dataList" v-else />
    <FloatingButton :numberOfList="dataList.length" />
  </v-container>
</template>
<script>
import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import moment from "moment";

export default {
  name: "HomePage",
  components: {
    Header,
    CardList,
    FloatingButton,
  },
  created() {
    console.log(this.dataList, "dataList");
  },
  computed: {
    dataList() {
      return this.$store.getters["task/getListTask"] || null;
    },
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