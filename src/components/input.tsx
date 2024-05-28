import type { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const root = tv({
  base: "h-[3rem]   rounded-[8px] w-full flex px-[0.875rem] py-[1rem] flex gap-[0.5rem] items-center",
  variants: {
    variant: {
      primary:
        "bg-transparent border border-gray-500 placeholder:text-gray-400 text-gray-200  text-[1rem] focus-within:border-yellow-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
  compoundVariants: [
    {
      variant: "primary",
      className: "",
    },
  ],
});

type Variants = VariantProps<typeof root> & ComponentProps<"div">;

type RootProps = Variants & {
  children: ReactNode;
};

type FieldProps = ComponentProps<"input"> & {};

type SlotProps = ComponentProps<"div"> & {
  children: ReactNode;
};

function Root({ className, variant, ...props }: RootProps) {
  return <div className={root({ className, variant })} {...props} />;
}

function Field({ type = "text", ...props }: FieldProps) {
  return (
    <input type={type} {...props} className="flex-1 h-full outline-none" />
  );
}

function Slot({ ...props }: SlotProps) {
  return <div className="" {...props} />;
}

export const Input = {
  Root,
  Field,
  Slot,
};
