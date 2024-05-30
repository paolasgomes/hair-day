import { getHoursAndMinutes } from "@/app/api/(helpers)/get-hours-and-minutes";

describe("getHoursAndMinutes function", () => {
  it("should return undefined hours and minutes for invalid input", () => {
    const input = "invalid";
    const result = getHoursAndMinutes(input);

    expect(result.hours).toBeNaN();
    expect(result.minutes).toBeNaN();
  });

  it("should return hours and minutes for valid input", () => {
    const input = "20:00";
    const result = getHoursAndMinutes(input);

    expect(result.hours).toBe(20);
    expect(result.minutes).toBe(0);
  });

  it("should return hours and minutes for single digit hours and minutes", () => {
    const input = "9:5";
    const result = getHoursAndMinutes(input);

    expect(result.hours).toBe(9);
    expect(result.minutes).toBe(5);
  });

  it("should return hours and minutes for two digit minutes", () => {
    const input = "15:30";
    const result = getHoursAndMinutes(input);

    expect(result.hours).toBe(15);
    expect(result.minutes).toBe(30);
  });
});
