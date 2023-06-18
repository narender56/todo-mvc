import { Utils } from "./";

export class Todo {
  id: string = Utils.uuid();
  title: string;
  completed = false;
  tags: string[] = [];

  constructor(title: string) {
    const { text, tags } = Utils.extractTags(title);
    this.title = text;
    this.tags = tags;
  }
}
