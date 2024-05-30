import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { format } from "date-fns";
import {
  type CaptionProps,
  DayPicker,
  useNavigation,
  DayPickerSingleProps,
} from "react-day-picker";
import { ptBR } from "date-fns/locale/pt-BR";
import "react-day-picker/dist/style.css";

type RootProps = Omit<DayPickerSingleProps, "mode">;

function Root({ ...props }: RootProps) {
  return (
    <DayPicker
      mode="single"
      styles={{
        root: {
          fontFamily: "var(--font-catamaran)",
          fontSize: "0.875rem",
          backgroundColor: "var(--gray-600)",
          borderRadius: "8px",
          width: "100%",
          padding: "1rem",
          margin: 0,
        },
        day: {
          width: "2rem",
          height: "2rem",
          fontSize: "0.875rem",
          color: "var(--gray-200)",
          backgroundColor: "var(--gray-600)",
          outline: "none",
          cursor: "pointer",
        },

        head_cell: {
          width: "2rem",
          color: "var(--gray-400)",
          fontWeight: "bold",
        },
        cell: {
          width: "2rem",
        },
        table: {
          width: "100%",
        },
      }}
      components={{
        Caption,
      }}
      modifiersStyles={{
        selected: {
          backgroundColor: "var(--gray-500)",
          color: "var(--yellow)",
          border: "1px solid",
          borderColor: "var(--yellow)",
          borderRadius: "4px",
          fontWeight: "bold",
        },
      }}
      fixedWeeks
      showOutsideDays
      {...props}
    />
  );
}

function Caption({ displayMonth }: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  return (
    <div className="flex justify-between p-[0.5rem] items-center">
      <button
        className="group"
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        <CaretLeft className="text-gray-200 text-[1.25rem] group-hover:text-gray-100" />
      </button>
      <span className="text-gray-100 font-bold text-center capitalize">
        {format(displayMonth, "MMMM yyy", { locale: ptBR })}
      </span>
      <button
        className="group"
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        <CaretRight className="text-gray-200 text-[1.25rem] group-hover:text-gray-100" />
      </button>
    </div>
  );
}

export const DatePicker = {
  Root,
};
