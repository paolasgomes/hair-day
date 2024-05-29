import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { TimeSelect } from "@/components/time-select";
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

      <TimeSelect.Root checked disabled>
        09:00
      </TimeSelect.Root>
    </main>
  );
}
