import { Task } from "./task.js";

export class Panel {
  tasks: Task[] = [];
  parentElement: HTMLElement | undefined;
  element: HTMLElement | undefined;

  render() {
    this.element = document.createElement("div");
    this.element.classList.add("panel");
    this.tasks.forEach((task) => {
      task.render(this.element);
    });
    this.parentElement?.append(this.element);
  }
}
