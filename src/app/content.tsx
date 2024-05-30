"use client";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/input";
import { Popover } from "@/components/popover";
import { TimeSelect } from "@/components/time-select";
import { CaretDown, UserSquare } from "@phosphor-icons/react";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

const example = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  label: index + 1,
}));

export function Content() {
  return (
    <main className="flex h-screen bg-gray-800">
      <section className="basis-[31.125rem] rounded-[12px] bg-gray-700 m-[0.875rem] flex justify-center items-center  ">
        <div className="flex flex-col gap-[1.5rem] w-[21.125rem]">
          <header>
            <h1 className="text-[1.5rem] font-bold text-gray-100">
              Agende um atendimento
            </h1>
            <sub className="text-[0.875rem] text-gray-300">
              Selecione data, horário e informe o nome do cliente para criar o
              agendamento
            </sub>
          </header>

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
        </div>
      </section>
      <section className="flex-1"></section>
    </main>
  );
}
