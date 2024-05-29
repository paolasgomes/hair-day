import { parse } from "date-fns";

function getTimestamp(time: string) {
  const date = time.split("-")[0];
  const hoursAndMinutes = time.split("-")[1];

  const parsedDate = parse(
    `${date} ${hoursAndMinutes}`,
    "dd/MM/yyyy HH:mm",
    new Date(),
  );

  return parsedDate;
}

export { getTimestamp };
