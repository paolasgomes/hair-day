import { ReactQueryProvider } from "./react-query";
import { type PropsWithChildren } from "react";
import { SkeletonThemeProvider } from "./skeleton";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <SkeletonThemeProvider>{children}</SkeletonThemeProvider>
    </ReactQueryProvider>
  );
}
