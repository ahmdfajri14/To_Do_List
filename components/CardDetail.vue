<template>
  <div>
    <div style="margin: 20px">
      <p style="font-weight: bold; font-size: 24px">
        {{ updateData.title }}
      </p>
      <v-col cols="12" align="start" style="padding-bottom: 0px">
        <v-progress-linear
          style="background: #9b9b9b"
          color="#a0ffc1"
          :value="
            (dataDetail.list.filter((x, i) => {
              return x.value;
            }).length /
              dataDetail.list.length) *
            100
          "
        />
      </v-col>
      <v-col
        class="value-progress"
        align="start"
        cols="12"
        style="padding-top: 10px"
      >
        {{
          dataDetail.list.filter((x, i) => {
            return x.value;
          }).length
        }}
        /{{ dataDetail.list.length }} Task Completed
      </v-col>
    </div>
    <v-card
      color="#F4FFB0"
      width="296px"
      style="margin: 20px; border-color: black"
      outlined
    >
      <div style="margin: 30px 20px 0px 20px">
        <v-text-field
          style="background: white; margin: 15px"
          class="pa-3"
          outlined
          placeholder="New Task"
          append-icon="mdi-plus"
          hide-details
          clearable
          v-model="newTaskTitle"
          @click:append="addTask"
          @keyup.enter="addTask"
        ></v-text-field>
        <v-list flat style="background: #f4ffb0" class="pt-0">
          <div v-for="task in updateData.list" :key="task.id">
            <v-list-item
              @click="doneTask(task.id)"
              :class="{ 'lime lighten-5': task.value }"
            >
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
                <v-list-item-action>
                  <v-btn @click.stop="deleteTask(task.id)" icon>
                    <v-icon color="primary">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
      </div>
      <p style="font-size: 10px; padding: 20px; font-weight: bold">
        {{ updateData.date }}
      </p>
    </v-card>
    <v-btn
      style="background: #A0FFC1;
 border-color: black; font-size 12px; font-weight: bold"
      block
      @click="saveTask"
    >
      Done All
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "CardDetail",
  data() {
    return {
      newTaskTitle: "",
      updateData: {},
    };
  },
  mounted() {
    this.updateData = this.dataDetail;
  },
  computed: {
    dataDetail() {
      return this.$store.getters["task/getTaskDetail"] || null;
    },
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        label: this.newTaskTitle,
        value: false,
      };
      this.updateData.list.push(newTask);
      this.newTaskTitle = "";
    },
    deleteTask(id) {
      this.updateData.list = this.updateData.list.filter(
        (task) => task.id !== id
      );
    },
    doneTask(id) {
      let task = this.updateData.list.filter((task) => task.id === id)[0];
      task.value = !task.value;
    },
    saveTask() {
      //   let data = {
      //     id: Date.now(),
      //     title: this.titleLabel,
      //     list: this.dataDetail,
      //     date: this.dateNow,
      //   };
      //   this.$store.commit("task/setAddTask", data);
      this.$router.push("/");
    },
  },
};
</script>
