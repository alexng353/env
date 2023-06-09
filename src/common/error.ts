export class ErrorWithCode extends Error {
  public status_code: number;
  constructor(code: number, message: string) {
    super(message);
    this.status_code = code;
  }
}
