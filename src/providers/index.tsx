import { ReactQueryProvider } from "./react-query";
import { type PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
