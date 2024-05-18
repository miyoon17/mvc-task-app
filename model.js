class TaskModel {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);
}
}