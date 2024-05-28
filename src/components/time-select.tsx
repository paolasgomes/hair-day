import type { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const root = tv({
  base: "w-[4.875rem] h-[2.5rem] rounded-[8px] flex items-center justify-center cursor-pointer",
  variants: {
    variant: {
      primary:
        "bg-gray-600 border border-gray-500 text-gray-200 text-[1rem] hover:bg-gray-500",
    },
    disabled: {
      true: "bg-transparent cursor-not-allowed hover:enabled:bg-transparent text-gray-500",
      false: "",
    },
    checked: {
      true: "border-yellow-default text-yellow-default",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
  compoundVariants: [
    {
      variant: "primary",
      disabled: true,
      checked: true,
      className: "",
    },
  ],
});

type Variants = VariantProps<typeof root> & ComponentProps<"button">;

type Props = Variants & {
  checked: boolean;
  children: ReactNode;
};

export function Root({
  className,
  variant,
  disabled,
  checked,
  ...props
}: Props) {
  return (
    <button
      className={root({ className, variant, disabled, checked })}
      {...props}
    />
  );
}

export const TimeSelect = {
  Root,
};
