import { forwardRef, type ComponentProps, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const root = tv({
  base: "h-[3rem] rounded-[8px] w-full px-[0.875rem] py-[1rem] flex gap-[0.5rem] items-center group",
  variants: {
    variant: {
      primary:
        "bg-transparent border-gray-500 text-[1rem] border focus-within:border-yellow-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type Variants = VariantProps<typeof root>;

type RootProps = Variants &
  ComponentProps<"div"> & {
    children: ReactNode;
  };

type FieldProps = ComponentProps<"input">;

type SlotProps = ComponentProps<"div">;

function Root({ className, variant = "primary", ...props }: RootProps) {
  return (
    <div
      data-variant={variant}
      className={root({ className, variant })}
      {...props}
    />
  );
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { type = "text", className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={twMerge(
        "flex-1 h-full  w-full outline-none bg-transparent group-data-[variant=primary]:font-normal group-data-[variant=primary]:placeholder:text-gray-400 group-data-[variant=primary]:text-gray-200",
        className,
      )}
      {...props}
    />
  );
});

function Slot({ className, ...props }: SlotProps) {
  return (
    <div className={twMerge("flex justify-center", className)} {...props} />
  );
}

export const Input = {
  Root,
  Field,
  Slot,
};
