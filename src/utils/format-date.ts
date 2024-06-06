import { format } from "date-fns";

function formatDate(date?: Date) {
  return format(date ? date : new Date(), "dd/MM/yyyy");
}

export { formatDate };
