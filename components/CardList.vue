<template>
  <div>
    <draggable class="list-group" :list="dataList" group="tasks">
      <v-card
        v-for="data in dataList"
        @click="onDetail(data)"
        :key="data.id"
        color="#F4FFB0"
        width="296px"
        height="288px"
        style="margin: 20px; border-color: black"
        outlined
      >
        <div style="margin: 30px 20px 0px 20px">
          <v-row
            no-gutters
            style="margin: 20px 10px 0px 10px"
            justify="space-between"
          >
            <v-col>
              <p style="font-weight: bold; font-size: 24px">{{ data.title }}</p>
            </v-col>
            <v-col>
              <v-icon width="120px" style="margin-left: 100px">
                mdi-menu
              </v-icon>
            </v-col>
          </v-row>
          <v-list flat style="background: #f4ffb0" class="pt-0">
            <div v-for="task in data.list" :key="task.id">
              <v-list-item>
                <template v-slot:default>
                  <v-list-item-action>
                    <v-checkbox :input-value="task.value"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ task.label }}</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </v-list>
        </div>
        <p style="font-size: 10px; padding: 20px; font-weight: bold">
          {{ data.date }}
        </p>
      </v-card>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "CardList",
  components: {
    draggable,
  },
  props: {
    dataList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onDetail(data) {
      this.$store.commit("task/setDetailTask", data);
      this.$router.push(`/detail/#${data.id}`);
    },
  },
};
</script>
