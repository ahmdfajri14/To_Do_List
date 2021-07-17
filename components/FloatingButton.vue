<template>
  <div class="button-floating">
    <v-row no-gutters justify="space-between">
      <v-col>
        <v-btn
          style="border-radius: 10px; font-weight: bold"
          width="215px"
          height="59px"
          color="#A9F5FF"
          depressed
        >
          Finish All
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          fab
          color="cyan accent-2"
          absolute
          right
          style="margin-right: 40px; background: #ff8585; color: white"
          @click="addList"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "FloatingButton",
  methods: {
    addList() {
      this.$router.push("add");
    },
  },
};
</script>

<style lang="scss" scoped>
.button-floating {
  position: fixed;
  bottom: 10px;
  width: 100%;
  z-index: 10;
  padding: 20px;
}
</style>