import { DayPicker } from "react-day-picker";

export function DatePicker() {
  return (
    <DayPicker
      mode="single"
      styles={{
        root: {
          fontFamily: "var(--font-catamaran)",
          fontSize: "0.875rem",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow: "0px 4px 8px 0px rgba(102, 102, 102, 0.25)",
          width: "100%",
          padding: "1rem",
          margin: 0,
        },
        day: {
          width: "2rem",
          height: "2rem",
          color: "#27282B",
          backgroundColor: "white",
          outline: "none",
          cursor: "pointer",
        },
        caption_label: {
          textTransform: "capitalize",
          padding: 0,
        },
        nav_icon: {
          width: "0.75rem",
          height: "0.75rem",
        },
        head_cell: {
          width: "2rem",
        },
        cell: {
          width: "2rem",
        },
        table: {
          width: "100%",
        },
        month: {
          width: "100%",
        },
        nav_button_previous: {
          backgroundColor: "white",
          cursor: "pointer",
        },
        nav_button_next: {
          backgroundColor: "white",
          cursor: "pointer",
        },
      }}
      //   modifiersStyles={{
      //     selected: {
      //       backgroundColor: "#2B9529",
      //       color: "white",
      //     },
      //     outside: {
      //       color: "#61646B",
      //     },
      //   }}
    />
  );
}
