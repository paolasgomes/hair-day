class AlreadyExistsScheduleForThisTimeError extends Error {
  statusCode: number;

  constructor() {
    super("Already exists schedule for this time");

    this.statusCode = 409;
  }
}

export { AlreadyExistsScheduleForThisTimeError };
