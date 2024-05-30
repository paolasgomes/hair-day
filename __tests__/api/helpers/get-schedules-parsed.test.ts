import { getSchedulesParsed } from "@/app/api/(helpers)/get-schedules-parsed";
import { type Schedule } from "@prisma/client";

describe("getSchedulesParsed function", () => {
  it("should categorize schedules correctly into morning, afternoon, and evening", () => {
    const schedules: Schedule[] = [
      {
        id: String(1),
        time: "09:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(2),
        time: "14:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(3),
        time: "20:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
    ];

    const result = getSchedulesParsed(schedules);

    expect(result.morning).toEqual([schedules[0]]);
    expect(result.afternoon).toEqual([schedules[1]]);
    expect(result.evening).toEqual([schedules[2]]);
  });

  it("should return empty arrays for all periods if no schedules are provided", () => {
    const schedules: Schedule[] = [];

    const result = getSchedulesParsed(schedules);

    expect(result).toEqual({
      morning: [],
      afternoon: [],
      evening: [],
    });
  });

  it("should handle edge cases where time is exactly at the boundary of each period", () => {
    const schedules: Schedule[] = [
      {
        id: String(1),
        time: "09:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(2),
        time: "12:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(3),
        time: "13:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(4),
        time: "18:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(5),
        time: "19:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(6),
        time: "21:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
    ];

    const result = getSchedulesParsed(schedules);

    expect(result.morning).toEqual([schedules[0], schedules[1]]);
    expect(result.afternoon).toEqual([schedules[2], schedules[3]]);
    expect(result.evening).toEqual([schedules[4], schedules[5]]);
  });

  it("should ignore schedules that do not fall within the defined periods", () => {
    const schedules: Schedule[] = [
      {
        id: String(1),
        time: "08:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
      {
        id: String(2),
        time: "22:00",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
    ];

    const result = getSchedulesParsed(schedules);

    expect(result.morning).toEqual([]);
    expect(result.afternoon).toEqual([]);
    expect(result.evening).toEqual([]);
  });

  it("should handle invalid time formats gracefully", () => {
    const schedules: Schedule[] = [
      {
        id: String(1),
        time: "invalid-time",
        createdAt: new Date(),
        customerName: "Test",
        date: "20/01/2024",
        updatedAt: new Date(),
      },
    ];

    const result = getSchedulesParsed(schedules);

    expect(result).toEqual({
      morning: [],
      afternoon: [],
      evening: [],
    });
  });
});
