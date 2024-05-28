"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { UserSquare } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main>
      <h1 className="text-yellow-default">Hello world</h1>

      <Button disabled>Agendar</Button>

      <Input.Root>
        <Input.Slot>
          <UserSquare className="text-yellow-default text-[1.25rem]" />
        </Input.Slot>
        <Input.Field />
      </Input.Root>
    </main>
  );
}
