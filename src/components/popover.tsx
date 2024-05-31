import {
  type PopoverProps,
  type PopoverTriggerProps,
  type PopoverPortalProps,
  type PopoverContentProps,
  Root as PopoverRoot,
  Trigger as PopoverTrigger,
  Portal as PopoverPortal,
  Content as PopoverContent,
} from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

type RootProps = PopoverProps;

type TriggerProps = PopoverTriggerProps;

type PortalProps = PopoverPortalProps;

type ContentProps = PopoverContentProps;

function Root({ ...props }: RootProps) {
  return <PopoverRoot {...props} />;
}

function Trigger({ className, ...props }: TriggerProps) {
  return <PopoverTrigger className={twMerge("", className)} {...props} />;
}

function Portal({ ...props }: PortalProps) {
  return <PopoverPortal {...props} />;
}

function Content({ className, sideOffset = 20, ...props }: ContentProps) {
  return (
    <PopoverContent
      className={twMerge("w-full", className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

export const Popover = {
  Root,
  Trigger,
  Portal,
  Content,
};
