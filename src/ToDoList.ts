export type Task = {
	title: String;
	description: String;
	targetDate: String;
	type?: String;
	priority?: String;
	subtasks?: Task[];
};

export class ToDoList {
	private tasks: Task[] = [];

	add(task: Task) {
		this.tasks.push(task);
	}

	getTasks() {
		return this.tasks;
	}
}
