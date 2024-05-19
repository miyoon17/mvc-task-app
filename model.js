class TaskModel {
  constructor() {
    this.tasks = []; // タスクを保存するための空の配列
  }

  addTask(task) {
    this.tasks.push(task); //新しいタスクを配列に追加
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);  //指定されていたタスクを配列から削除
  }

  getTask () {
    return this.tasks;  //全てのタスクを返す
  }
}

const taskModel = new TaskModel();  //TaskModelクラスのインスタンスを作成
export default taskModel;  //インスタンスをエクスポート