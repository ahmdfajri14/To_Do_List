export default {
    setAddTask(state, value) {
        state.listTask.push(value);
      },
    setDetailTask(state, value) {
      state.detailTask = value
    },
}