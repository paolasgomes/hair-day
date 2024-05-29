class InvalidDateValidationError extends Error {
  statusCode: number;

  constructor() {
    super("Invalid date");

    this.statusCode = 400;
  }
}

export { InvalidDateValidationError };
