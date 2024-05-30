import prisma from "@/libs/prisma";
import { type NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";
import { isValid, parse } from "date-fns";
import { InvalidDateValidationError } from "../(errors)/invalid-date-validation-error";
import { getSchedulesParsed } from "../(helpers)/get-schedules-parsed";

const schema = z.object({
  date: z.string().min(1),
});

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const { date } = schema.parse({ date: searchParams.get("date") });

    const parsedDate = parse(date, "dd/MM/yyyy", new Date());

    if (!isValid(parsedDate)) {
      throw new InvalidDateValidationError();
    }

    const schedules = await prisma.schedule.findMany({
      where: {
        date,
      },
    });

    return NextResponse.json(getSchedulesParsed(schedules), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof InvalidDateValidationError) {
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
