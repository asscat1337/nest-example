export class PostDto {
  description: string;
  text: string;
  created: Date;

  constructor(data) {
    this.description = data.description;
    this.text = data.text;
    this.created = data.create;
  }
}
