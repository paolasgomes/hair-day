"use client";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/input";
import { Popover } from "@/components/popover";
import { TimeSelect } from "@/components/time-select";
import { CalendarBlank } from "@phosphor-icons/react";
import { UserSquare } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main>
      <h1 className="text-yellow-default">Hello world</h1>

      <Button.Root disabled>Agendar</Button.Root>

      <Input.Root>
        <Input.Slot>
          <UserSquare className="text-yellow-default text-[1.25rem]" />
        </Input.Slot>
        <Input.Field />
      </Input.Root>

      <Input.Root>
        <Input.Slot className="h-[1.25rem]">
          <Popover.Root>
            <Popover.Trigger>
              <CalendarBlank className="h-full text-yellow-default" />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content>
                <DatePicker />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </Input.Slot>
        <Input.Field />
      </Input.Root>

      <TimeSelect.Root checked disabled>
        09:00
      </TimeSelect.Root>

      {/* <DatePicker /> */}
    </main>
  );
}
