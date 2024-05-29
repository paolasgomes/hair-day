import prisma from "@/libs/prisma";
import { isValid } from "date-fns";
import { type NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";
import { getTime } from "../(helpers)/get-time";
import { InvalidDateValidationError } from "../(errors)/invalid-date-validation-error";
import { AlreadyExistsScheduleForThisTimeError } from "../(errors)/already-exists-schedule-for-this-time-error";

const schema = z.object({
  customerName: z.string().min(1),
  time: z
    .string()
    .min(1)
    .refine((v) => {
      const { hours } = getTime(v);

      if (hours < 9 || hours > 20) {
        return false;
      }

      return true;
    }, "Time of schedule must be between 9am and 8pm")
    .transform(getTime),
});

export async function POST(req: NextRequest) {
  try {
    const { customerName, time } = schema.parse(await req.json());

    const { timeStamp } = time;

    if (!isValid(timeStamp)) {
      throw new InvalidDateValidationError();
    }

    const data = {
      customerName,
      time: timeStamp,
    };

    const alreadyExistsScheduleForThisTime = await prisma.schedule.findFirst({
      where: {
        time: timeStamp,
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
    if (error instanceof InvalidDateValidationError) {
      return NextResponse.json(
        { message: error.message },
        {
          status: error.statusCode,
        },
      );
    }

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