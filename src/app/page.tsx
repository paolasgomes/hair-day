"use client";
import {
  CalendarBlank,
  CloudSun,
  MoonStars,
  SunHorizon,
} from "@phosphor-icons/react/dist/ssr";
import { Form } from "./form";
import { Popover } from "@/components/popover";
import { Input } from "@/components/input";
import { CaretDown } from "@phosphor-icons/react";
import { DatePicker } from "@/components/date-picker";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/libs/axios";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatDate } from "@/utils/format-date";

type Schedule = {
  createdAt: string;
  customerName: string;
  date: string;
  id: string;
  time: string;
  updatedAt: string;
};

type SchedulesByPeriods = {
  morning: Schedule[];
  evening: Schedule[];
  afternoon: Schedule[];
};

type SchedulesFilterByDate = z.infer<typeof schema>;

const schema = z.object({
  date: z.custom<Date>().refine((v) => !!v),
});

const getSchedulesByDate = async (date: string) => {
  const { data } = await api.get<SchedulesByPeriods>("/schedules", {
    params: {
      date,
    },
  });

  return data;
};

export default function Home() {
  const { control, watch } = useForm<SchedulesFilterByDate>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
    },
  });

  const { date } = watch();

  const { data: schedulesByDate } = useQuery({
    queryKey: ["get-schedules-by-date", date],
    queryFn: () => getSchedulesByDate(formatDate(date)),
  });

  const morningSchedulesByDate = schedulesByDate?.morning ?? [];
  const hasMorningSchedulesByDate = !!morningSchedulesByDate.length;

  return (
    <main className="flex h-screen bg-gray-800 ">
      <section className="basis-[31.125rem] rounded-[12px] bg-gray-700 m-[0.875rem] flex justify-center items-center  py-[5rem]">
        <Form />
      </section>
      <section className="flex justify-center flex-1">
        <div className=" basis-[42.625rem] flex flex-col gap-[2rem] py-[5rem]">
          <div className="flex justify-between">
            <div className="flex-1">
              <h2 className="text-[1.5rem] font-bold text-gray-100">
                Sua agenda
              </h2>
              <sub className="text-[0.875rem] text-gray-300">
                Consulte os seus cortes de cabelo agendados por dia
              </sub>
            </div>

            <div className="w-[min(10rem,_100%)] self-center">
              <Popover.Root>
                <Popover.Trigger className="group w-full">
                  <Input.Root className="group-data-[state=open]:border-yellow-dark w-full justify-between">
                    <Input.Slot className="gap-2 items-center">
                      <CalendarBlank className="text-yellow-default text-[1.25rem]" />
                      <span className="font-normal text-gray-200">
                        {formatDate(date)}
                      </span>
                    </Input.Slot>

                    <Input.Slot>
                      <CaretDown className="text-gray-300 text-[1rem] group-data-[state=open]:rotate-180 transition group-data-[state=closed]:rotate-0" />
                    </Input.Slot>
                  </Input.Root>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content align="end" className="w-[21.125rem]">
                    <Controller
                      name="date"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <DatePicker.Root selected={value} onSelect={onChange} />
                      )}
                    />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
          </div>

          <div className="flex flex-col gap-[0.75rem] ">
            <article className="w-full border border-gray-600 rounded-[8px]">
              <div className=" py-[0.75rem] px-[1.25rem] text-[0.875rem]  flex justify-between">
                <span className="flex-1 text-gray-300 flex items-center gap-[0.75rem]">
                  <SunHorizon className="text-[1.25rem] text-yellow-default" />
                  Manhã
                </span>
                <span className="text-gray-400">09-12h</span>
              </div>

              <div className="h-[1px] bg-gray-600" />

              <ul className="px-[1.25rem] py-[1.5rem] flex flex-col gap-[0.375rem]">
                {hasMorningSchedulesByDate &&
                  morningSchedulesByDate.map(({ id, time, customerName }) => (
                    <li
                      key={id}
                      className="text-gray-400 flex gap-[1.25rem] items-center"
                    >
                      <strong className=" font-bold">{time}</strong>
                      {customerName}
                    </li>
                  ))}

                {!hasMorningSchedulesByDate && (
                  <li className="text-gray-400 flex gap-[1.25rem] items-center justify-center">
                    Não há nenhum agendamento para o período
                  </li>
                )}
              </ul>
            </article>

            <article className="w-full border border-gray-600 rounded-[8px]">
              <div className=" py-[0.75rem] px-[1.25rem] text-[0.875rem]  flex justify-between">
                <span className="flex-1 text-gray-300 flex items-center gap-[0.75rem]">
                  <CloudSun className="text-[1.25rem] text-yellow-default" />
                  Tarde
                </span>
                <span className="text-gray-400">13-18h</span>
              </div>

              <div className="h-[1px] bg-gray-600" />

              <ul className="px-[1.25rem] py-[1.5rem] flex flex-col gap-[0.375rem]">
                {schedulesByDate?.afternoon.length ? (
                  schedulesByDate?.afternoon.map(
                    ({ id, time, customerName }) => (
                      <li
                        key={id}
                        className="text-gray-400 flex gap-[1.25rem] items-center"
                      >
                        <strong className=" font-bold">{time}</strong>
                        {customerName}
                      </li>
                    ),
                  )
                ) : (
                  <li className="text-gray-400 flex gap-[1.25rem] items-center justify-center">
                    Não há nenhum agendamento para o período
                  </li>
                )}
              </ul>
            </article>

            <article className="w-full border border-gray-600 rounded-[8px]">
              <div className=" py-[0.75rem] px-[1.25rem] text-[0.875rem]  flex justify-between">
                <span className="flex-1 text-gray-300 flex items-center gap-[0.75rem]">
                  <MoonStars className="text-[1.25rem] text-yellow-default" />
                  Noite
                </span>
                <span className="text-gray-400">19-21h</span>
              </div>

              <div className="h-[1px] bg-gray-600" />

              <ul className="px-[1.25rem] py-[1.5rem] flex flex-col gap-[0.375rem]">
                {schedulesByDate?.evening.length ? (
                  schedulesByDate?.evening.map(({ id, time, customerName }) => (
                    <li
                      key={id}
                      className="text-gray-400 flex gap-[1.25rem] items-center"
                    >
                      <strong className=" font-bold">{time}</strong>
                      {customerName}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 flex gap-[1.25rem] items-center justify-center">
                    Não há nenhum agendamento para o período
                  </li>
                )}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
