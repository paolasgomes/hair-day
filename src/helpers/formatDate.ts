import { format } from "date-fns";

export const formatDate = (date?: Date) => {
  return format(date ? date : new Date(), "dd/MM/yyyy");
};
