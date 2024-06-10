import type { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import SkeletonLoading from "react-loading-skeleton";

const root = tv({
  base: "w-[4.875rem] h-[2.5rem] rounded-[8px] flex items-center justify-center cursor-pointer",
  variants: {
    variant: {
      primary:
        "bg-gray-600 border border-gray-500 text-gray-200 text-[1rem] disabled:bg-transparent disabled:cursor-not-allowed hover:enabled:bg-gray-500 disabled:text-gray-500 data-[checked=true]:border-yellow-default data-[checked=true]:text-yellow-default",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type Variants = VariantProps<typeof root>;

type Props = Variants &
  ComponentProps<"button"> & {
    checked: boolean;
    loading?: boolean;
    children: ReactNode;
  };

export function Root({
  className,
  variant,
  checked,
  loading,
  children,
  disabled,
  ...props
}: Props) {
  return (
    <button
      type="button"
      data-checked={checked}
      disabled={loading || disabled}
      className={root({ className, variant })}
      {...props}
    >
      {loading && (
        <SkeletonLoading
          containerClassName="flex-1 rounded-[8px] "
          height={"2.5rem"}
        />
      )}
      {!loading && children}
    </button>
  );
}

export const TimeSelect = {
  Root,
};
