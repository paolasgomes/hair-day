import { type Schedule } from "@prisma/client";
import { getHoursAndMinutes } from "./get-hours-and-minutes";

type ParsedSchedules = {
  morning: Schedule[];
  afternoon: Schedule[];
  evening: Schedule[];
};

function getSchedulesParsed(schedules: Schedule[]) {
  const data = schedules.reduce(
    (acc: ParsedSchedules, schedule) => {
      const { time } = schedule;

      const { hours } = getHoursAndMinutes(time);

      if (hours >= 9 && hours <= 12) {
        return { ...acc, morning: [...acc.morning, schedule] };
      }

      if (hours >= 13 && hours <= 18) {
        return { ...acc, afternoon: [...acc.afternoon, schedule] };
      }

      if (hours >= 19 && hours <= 21) {
        return { ...acc, evening: [...acc.evening, schedule] };
      }

      return acc;
    },
    {
      morning: [],
      afternoon: [],
      evening: [],
    },
  );

  return data;
}

export { getSchedulesParsed };
