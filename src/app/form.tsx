"use client";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/input";
import { Popover } from "@/components/popover";
import { TimeSelect } from "@/components/time-select";
import { api } from "@/libs/axios";
import { CalendarBlank, CaretDown, UserSquare } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

type Time = {
  time: string;
  enabled: boolean;
};

type AvailableTimesByDate = {
  afternoon: Time[];
  morning: Time[];
  evening: Time[];
};

type CreateSchedule = {
  date: string;
  time: string;
  customerName: string;
};

type ScheduleForm = z.infer<typeof schema>;

const schema = z.object({
  date: z.custom<Date | undefined>(),
  customer: z
    .string({ required_error: "Informe o nome do cliente" })
    .min(1, "Informe o nome do cliente"),
  time: z.string().min(1),
});

const getAvailableTimesByDate = async (date: string) => {
  const { data } = await api.get<AvailableTimesByDate>("/schedules/times/", {
    params: {
      date,
    },
  });

  return data;
};

const createSchedule = async (data: CreateSchedule) => {
  await api.post("/schedules", data);
};

export function Form() {
  const queryClient = useQueryClient();

  const formattedDate = (date?: Date) => {
    return format(date ? date : new Date(), "dd/MM/yyyy");
  };

  const { register, handleSubmit, watch, control, reset, getValues } =
    useForm<ScheduleForm>({
      resolver: zodResolver(schema),
      defaultValues: {
        date: new Date(),
      },
    });

  const { date } = watch();

  const { data: availableTimesByDate } = useQuery({
    queryKey: ["get-available-times-by-date", date],
    queryFn: () => getAvailableTimesByDate(formattedDate(date)),
  });

  const { mutate: handleCreateSchedule } = useMutation({
    mutationKey: ["create-schedule"],
    mutationFn: createSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-available-times-by-date"],
      });

      reset({
        ...getValues(),
        customer: "",
        time: "",
      });
    },
  });

  const onSubmit = ({ date, customer, time }: ScheduleForm) => {
    if (date) {
      const normalizedData: CreateSchedule = {
        date: format(date, "dd/MM/yyyy"),
        customerName: customer,
        time,
      };

      handleCreateSchedule(normalizedData);
    }
  };

  return (
    <form
      className="flex flex-col gap-[1.5rem] w-[21.125rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
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
              <Input.Slot className="gap-2 items-center">
                <CalendarBlank className="text-yellow-default text-[1.25rem]" />
                <span className="font-normal text-gray-200">
                  {formattedDate(date)}
                </span>
              </Input.Slot>
              <Input.Slot>
                <CaretDown className="text-gray-300 text-[1rem] group-data-[state=open]:rotate-180 transition group-data-[state=closed]:rotate-0" />
              </Input.Slot>
            </Input.Root>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content align="start" className="w-[21.125rem]">
              <Controller
                name="date"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <DatePicker.Root
                    disabled={{ before: new Date() }}
                    selected={value}
                    onSelect={onChange}
                  />
                )}
              />
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
            {availableTimesByDate?.morning.map(({ enabled, time }) => (
              <Controller
                name="time"
                key={time}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TimeSelect.Root
                    value={value}
                    disabled={!enabled}
                    onClick={() => onChange(time)}
                    checked={value === time}
                  >
                    {time}
                  </TimeSelect.Root>
                )}
              />
            ))}
          </div>
        </div>
        <div className="mt-[0.5rem] flex flex-col gap-[0.75rem]">
          <span className="text-[0.875rem] text-gray-300">Tarde</span>

          <div className="flex flex-wrap gap-[0.5rem]">
            {availableTimesByDate?.afternoon.map(({ enabled, time }) => (
              <Controller
                name="time"
                key={time}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TimeSelect.Root
                    value={value}
                    disabled={!enabled}
                    onClick={() => onChange(time)}
                    checked={value === time}
                  >
                    {time}
                  </TimeSelect.Root>
                )}
              />
            ))}
          </div>
        </div>
        <div className="mt-[0.5rem] flex flex-col gap-[0.75rem]">
          <span className="text-[0.875rem] text-gray-300">Noite</span>

          <div className="flex flex-wrap gap-[0.5rem]">
            {availableTimesByDate?.evening.map(({ enabled, time }) => (
              <Controller
                name="time"
                key={time}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TimeSelect.Root
                    value={value}
                    disabled={!enabled}
                    onClick={() => onChange(time)}
                    checked={value === time}
                  >
                    {time}
                  </TimeSelect.Root>
                )}
              />
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

          <Input.Field
            placeholder="Nome do cliente"
            {...register("customer")}
          />
        </Input.Root>
      </label>

      <Button.Root type="submit">Agendar</Button.Root>
    </form>
  );
}
