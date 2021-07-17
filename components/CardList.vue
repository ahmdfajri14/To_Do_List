<template>
  <div>
    <v-card
      v-for="data in dataList"
      :key="data.index"
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
            <v-icon width="120px" style="margin-left: 100px"> mdi-menu </v-icon>
          </v-col>
        </v-row>
        <v-list flat style="background: #f4ffb0" class="pt-0">
          <div v-for="task in data.list" :key="task.id">
            <v-list-item :class="{ 'lime lighten-5': task.value }">
              <template v-slot:default>
                <v-list-item-action>
                  <v-checkbox :input-value="task.value"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    :class="{ 'text-decoration-line-through': task.value }"
                    >{{ task.label }}</v-list-item-title
                  >
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
  </div>
</template>
<script>
export default {
  name: "CardList",
  props: {
    dataList: {
      type: Array,
      default: [],
    },
  },
};
</script>
