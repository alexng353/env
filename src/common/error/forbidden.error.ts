import { ErrorWithCode } from "../error";

export class ErrorForbidden extends ErrorWithCode {
  constructor(message?: string) {
    super(403, message ?? "Forbidden");
  }
}
