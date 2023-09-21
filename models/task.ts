export class Task {
  element: HTMLDivElement | undefined;
  createTime = new Date();
  updateTime = new Date();
  value: string = "132";
  done = false;
  constructor() {}

  render(parentElement: HTMLElement | undefined) {
    if (!parentElement) return null;

    this.element = document.createElement("div");
    this.element.classList.add("task");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    this.element.append(checkBox);
    const elementp = document.createElement("p")
    elementp.innerText = this.value
    this.element.append(elementp)
    parentElement.append(this.element);
  }
}
