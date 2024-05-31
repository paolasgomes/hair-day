"use client";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/input";
import { Popover } from "@/components/popover";
import { TimeSelect } from "@/components/time-select";
import { CalendarBlank, CaretDown, UserSquare } from "@phosphor-icons/react";

const example = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  label: index + 1,
}));

export function Form() {
  return (
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
        <Popover.Root>
          <Popover.Trigger className="group w-full">
            <Input.Root className="group-data-[state=open]:border-yellow-dark justify-between">
              <Input.Slot>
                <CalendarBlank className="text-yellow-default text-[1.25rem]" />
              </Input.Slot>

              <Input.Slot>
                <CaretDown className="text-gray-300 text-[1rem] group-data-[state=open]:rotate-180 transition group-data-[state=closed]:rotate-0" />
              </Input.Slot>
            </Input.Root>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content align="start" className="w-[21.125rem]">
              <DatePicker.Root />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
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
  );
}
