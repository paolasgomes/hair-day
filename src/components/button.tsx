import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "h-[3.5rem] rounded-[0.5rem] flex items-center justify-center w-full uppercase ",
  variants: {
    variant: {
      primary:
        "bg-yellow-default text-gray-900 font-bold text-[0.875rem] hover:border-[2px] hover:border-yellow-light",
    },
    disabled: {
      true: "opacity-30 cursor-not-allowed hover:enabled:border-transparent",
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
      className: "",
    },
  ],
});

type Variants = VariantProps<typeof button> & ComponentProps<"button">;

type Props = Variants & {
  children: ReactNode;
};

export const Button = ({ className, variant, disabled, ...props }: Props) => {
  return (
    <button className={button({ className, variant, disabled })} {...props} />
  );
};
