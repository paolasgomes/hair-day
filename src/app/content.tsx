"use client";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/input";
import { Popover } from "@/components/popover";
import { TimeSelect } from "@/components/time-select";
import {
  CaretDown,
  CloudSun,
  MoonStars,
  SunHorizon,
  UserSquare,
} from "@phosphor-icons/react";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

const example = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  label: index + 1,
}));

export function Content() {
  return (
    <main className="flex h-screen bg-gray-800 ">
      <section className="basis-[31.125rem] rounded-[12px] bg-gray-700 m-[0.875rem] flex justify-center items-center  py-[5rem]">
        <form className="flex flex-col gap-[1.5rem] w-[21.125rem]">
          <div>
            <h2 className="text-[1.5rem] font-bold text-gray-100">
              Agende um atendimento
            </h2>
            <sub className="text-[0.875rem] text-gray-300">
              Selecione data, horário e informe o nome do cliente para criar o
              agendamento
            </sub>
          </div>

          <label className="text-gray-200 font-bold flex flex-col gap-[0.5rem]">
            Data
            <Input.Root>
              <Input.Slot>
                <Popover.Root>
                  <Popover.Trigger>
                    <CalendarBlank className="text-yellow-default text-[1.25rem]" />
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      align="start"
                      alignOffset={-18}
                      className="w-[21.125rem]"
                    >
                      <DatePicker.Root />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </Input.Slot>

              <Input.Field />

              <Input.Slot>
                <CaretDown className="text-gray-300 text-[1rem]" />
              </Input.Slot>
            </Input.Root>
          </label>

          <div className="flex flex-col gap-[0.5rem]">
            <span className="text-gray-200 font-bold flex flex-col gap-[0.5rem]">
              Horários
            </span>

            <div className=" flex flex-col gap-[0.75rem]">
              <span className="text-[0.875rem] text-gray-300">Manhã</span>

              <div className="flex flex-wrap gap-[0.5rem]">
                {example.map((time) => (
                  <TimeSelect.Root key={time.id} checked={false}>
                    09:00
                  </TimeSelect.Root>
                ))}
              </div>
            </div>
            <div className="mt-[0.5rem] flex flex-col gap-[0.75rem]">
              <span className="text-[0.875rem] text-gray-300">Tarde</span>

              <div className="flex flex-wrap gap-[0.5rem]">
                {example.map((time) => (
                  <TimeSelect.Root key={time.id} checked={false}>
                    09:00
                  </TimeSelect.Root>
                ))}
              </div>
            </div>
            <div className="mt-[0.5rem] flex flex-col gap-[0.75rem]">
              <span className="text-[0.875rem] text-gray-300">Noite</span>

              <div className="flex flex-wrap gap-[0.5rem]">
                {example.map((time) => (
                  <TimeSelect.Root key={time.id} checked>
                    09:00
                  </TimeSelect.Root>
                ))}
              </div>
            </div>
          </div>

          <label className="text-gray-200 font-bold flex flex-col gap-[0.5rem]">
            Cliente
            <Input.Root>
              <Input.Slot>
                <UserSquare className="text-yellow-default text-[1.25rem]" />
              </Input.Slot>

              <Input.Field placeholder="Nome do cliente" />
            </Input.Root>
          </label>

          <Button.Root>Agendar</Button.Root>
        </form>
      </section>
      <section className="flex justify-center flex-1  ">
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

            <Input.Root className="w-[min(10rem,_100%)]  self-center">
              <Input.Slot>
                <Popover.Root>
                  <Popover.Trigger>
                    <CalendarBlank className="text-yellow-default text-[1.25rem]" />
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      align="end"
                      alignOffset={-125}
                      className="w-[21.125rem]"
                    >
                      <DatePicker.Root />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </Input.Slot>

              <Input.Field />

              <Input.Slot>
                <CaretDown className="text-gray-300 text-[1rem]" />
              </Input.Slot>
            </Input.Root>
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
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
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
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
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
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
                <li className="text-gray-400 flex gap-[1.25rem] items-center">
                  <strong className=" font-bold">11:00</strong>
                  Italo amorzão
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
