import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const root = tv({
  base: "h-[3.5rem] rounded-[8px] flex items-center justify-center w-full uppercase cursor-pointer",
  variants: {
    variant: {
      primary:
        "bg-yellow-default text-gray-900 font-bold text-[0.875rem] hover:border-[2px] hover:border-yellow-light",
    },
    disabled: {
      true: "opacity-30 cursor-not-allowed hover:enabled:border-transparent",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type Variants = VariantProps<typeof root>;

type Props = Variants &
  ComponentProps<"button"> & {
    children: ReactNode;
  };

function Root({ className, variant, disabled, ...props }: Props) {
  return (
    <button className={root({ className, variant, disabled })} {...props} />
  );
}

export const Button = {
  Root,
};
