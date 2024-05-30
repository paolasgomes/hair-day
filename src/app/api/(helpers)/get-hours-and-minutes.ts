function getHoursAndMinutes(value: string) {
  const hours = Number(value.split(":")[0]);
  const minutes = Number(value.split(":")[1]);

  return { hours, minutes };
}

export { getHoursAndMinutes };
