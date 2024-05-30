function getHoursAndMinutes(time: string) {
  const hours = Number(time.split(":")[0]);
  const minutes = Number(time.split(":")[1]);

  return { hours, minutes };
}

export { getHoursAndMinutes };
