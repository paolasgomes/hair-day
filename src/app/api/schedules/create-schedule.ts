import prisma from "@/libs/prisma";
import { isValid, parse } from "date-fns";
import { type NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";
import { getHoursAndMinutes } from "../(helpers)/get-hours-and-minutes";
import { AlreadyExistsScheduleForThisTimeError } from "../(errors)/already-exists-schedule-for-this-time-error";

const schema = z.object({
  customerName: z.string().min(1),
  date: z
    .string()
    .min(1)
    .refine((v) => isValid(parse(v, "dd/MM/yyyy", new Date())), "Invalid date"),
  time: z
    .string()
    .min(1)
    .refine((v) => {
      const { hours, minutes } = getHoursAndMinutes(v);

      if (minutes > 0 || hours < 9 || hours > 21) {
        return false;
      }

      return true;
    }, "Time of schedule must be between 9am and 9pm and minutes not be greater than zero"),
});

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(await req.json());

    const { time, date } = data;

    const alreadyExistsScheduleForThisTime = await prisma.schedule.findFirst({
      where: {
        time,
        date,
      },
    });

    if (alreadyExistsScheduleForThisTime) {
      throw new AlreadyExistsScheduleForThisTimeError();
    }

    const schedule = await prisma.schedule.create({
      data,
    });

    return NextResponse.json(
      { schedule },
      {
        status: 201,
      },
    );
  } catch (error) {
    if (error instanceof AlreadyExistsScheduleForThisTimeError) {
      return NextResponse.json(
        { message: error.message },
        {
          status: error.statusCode,
        },
      );
    }

    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: error.issues },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json(
      { message: "Server error" },
      {
        status: 500,
      },
    );
  }
}
