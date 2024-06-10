import { PropsWithChildren } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

export function SkeletonThemeProvider({ children }: PropsWithChildren) {
  return (
    <SkeletonTheme baseColor="var(--gray-600)" highlightColor="var(--gray-500)">
      {children}
    </SkeletonTheme>
  );
}
