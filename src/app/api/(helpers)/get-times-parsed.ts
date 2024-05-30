import { Schedule } from "@prisma/client";
import { getHoursAndMinutes } from "./get-hours-and-minutes";

type Time = {
  time: string;
  enabled: boolean;
};

type ParsedTimes = {
  morning: Time[];
  afternoon: Time[];
  evening: Time[];
};

function getTimes(length: number, startTime: number = 0) {
  const times = Array.from({ length }, (_, i) => ({
    time: `${(i + startTime).toString().padStart(2, "0")}:00`,
    enabled: true,
  }));

  return times;
}

function getTimesParsed(schedules: Schedule[]) {
  const data = schedules.reduce(
    (acc: ParsedTimes, schedule) => {
      const { time } = schedule;

      const { hours } = getHoursAndMinutes(time);

      if (hours >= 9 && hours <= 12) {
        return {
          ...acc,
          morning: acc.morning.map((v) =>
            v.time === time ? { ...v, enabled: false } : v,
          ),
        };
      }

      if (hours >= 13 && hours <= 18) {
        return {
          ...acc,
          afternoon: acc.afternoon.map((v) =>
            v.time === time ? { ...v, enabled: false } : v,
          ),
        };
      }

      if (hours >= 19 && hours <= 21) {
        return {
          ...acc,
          evening: acc.evening.map((v) =>
            v.time === time ? { ...v, enabled: false } : v,
          ),
        };
      }

      return acc;
    },
    {
      morning: getTimes(4, 9),
      afternoon: getTimes(6, 13),
      evening: getTimes(3, 19),
    },
  );

  return data;
}

export { getTimesParsed };
