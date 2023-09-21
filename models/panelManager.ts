import { Panel } from "./panel.js";
import { Task } from "./task.js";

export class PanelManager {
  panels: any[] = [];
  private parentElement: HTMLElement | undefined;
  div: HTMLElement | undefined;
  user: {
    firstName: string;
    lastName: string;
  };

  constructor() {
    this.user = { firstName: "", lastName: "" };
  }

  render(body: HTMLElement | null) {
    if (!body) throw new Error("Element in render in null");
    this.parentElement = body;
    this.div = document.createElement("div");
    this.div.classList.add("panelManager");
    this.parentElement.append(this.div);
    this.addH3Element();
    this.addNewPanelButton();
  }
  private addH3Element() {
    const elementh = document.createElement("h3");
    elementh.textContent = "Panel";
    this.div?.append(elementh);
  }
  private addNewPanelButton() {
    const addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.addEventListener("click", this.newPanel.bind(this));
    this.div?.append(addButton);
  }

  newPanel() {
    const panel = new Panel();
    panel.parentElement = this.div;
    panel.tasks = [new Task()];
    panel.render();
    this.panels.push(panel);
  }
}
