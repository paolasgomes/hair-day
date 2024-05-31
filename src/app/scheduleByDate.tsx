"use client";

import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/input";
import { Popover } from "@/components/popover";
import { CalendarBlank, CaretDown } from "@phosphor-icons/react";

export function ScheduleByDate() {
  return (
    <div className="w-[min(10rem,_100%)] self-center">
      <Popover.Root>
        <Popover.Trigger className="group w-full">
          <Input.Root className="group-data-[state=open]:border-yellow-dark w-full justify-between">
            <Input.Slot>
              <CalendarBlank className="text-yellow-default text-[1.25rem]" />
            </Input.Slot>

            <Input.Slot>
              <CaretDown className="text-gray-300 text-[1rem] group-data-[state=open]:rotate-180 transition group-data-[state=closed]:rotate-0" />
            </Input.Slot>
          </Input.Root>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content align="end" className="w-[21.125rem]">
            <DatePicker.Root />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
