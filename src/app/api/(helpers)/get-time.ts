import { parse } from "date-fns";

function getTime(time: string) {
  const date = time.split("-")[0];
  const hoursAndMinutes = time.split("-")[1];
  const hours = Number(hoursAndMinutes.split(":")[0]);
  const minutes = Number(hoursAndMinutes.split(":")[1]);

  const timeStamp = parse(
    `${date} ${hoursAndMinutes}`,
    "dd/MM/yyyy HH:mm",
    new Date(),
  );

  return { timeStamp, date, hoursAndMinutes, hours, minutes };
}

export { getTime };
