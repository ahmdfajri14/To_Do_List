<template>
  <div>
    <v-text-field
      label="Title"
      style="margin: 20px"
      v-model="titleLabel"
    ></v-text-field>
    <v-card
      color="#F4FFB0"
      width="296px"
      style="margin: 20px; border-color: black"
      outlined
    >
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
        <div v-for="task in tasks" :key="task.id">
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
      <p style="font-size: 10px; padding: 20px; font-weight: bold">
        {{ dateNow }}
      </p>
    </v-card>
    <v-btn
      style="background: #a9f5ff; border-color: black; font-size 12px; font-weight: bold"
      block
      @click="saveTask"
      :disabled="validation"
    >
      Create To-do List
    </v-btn>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ToDo",
  data() {
    return {
      titleLabel: "",
      newTaskTitle: "",
      tasks: [],
    };
  },
  computed: {
    dateNow() {
      return moment().format("dddd, MMMM Do YYYY");
    },
    validation() {
      if (this.titleLabel !== "" && this.tasks.length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        label: this.newTaskTitle,
        value: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.value = !task.value;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    saveTask() {
      let data = {
        title: this.titleLabel,
        list: this.tasks,
      };
      this.$store.commit("task/setAddTask", data);
      this.$router.push("/");
    },
  },
};
</script>
