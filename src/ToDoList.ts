export type Task = {
	title: string;
	description: string;
	targetDate: string;
	type?: string;
	priority?: string;
	subtasks?: Task[];
};

export type UpdateTask = {
	title?: string;
	description?: string;
	targetDate?: string;
	type?: string;
	priority?: string;
	subTasks?: Task[];
};

export class ToDoList {
  private tasks: Task[] = [];

  add(task: Task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  updateTask(index: number, task: UpdateTask) {
    this.tasks[index] = {
      ...this.tasks[index],
      ...task,
    };
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
