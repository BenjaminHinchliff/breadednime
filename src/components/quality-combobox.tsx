import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "~/lib/cn";

interface Props {
  qualities: string[];
  value: string;
  onValueChange: (value: string) => void;
}

export function QualityCombobox({ qualities, value, onValueChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[97px] justify-between"
        >
          {value
            ? qualities.find((quality) => quality === value)
            : "Select framework..."}
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[97px] p-0"
        side="top"
        avoidCollisions={false}
      >
        <Command>
          <CommandGroup>
            {qualities.map((quality) => (
              <CommandItem
                key={quality}
                onSelect={(currentValue) => {
                  onValueChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === quality ? "opacity-100" : "opacity-0"
                  )}
                />
                {quality}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
