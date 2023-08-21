import { Volume } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { VerticalSlider } from "./ui/vertical-slider";

interface Props {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export function VolumeBar({ volume, onVolumeChange }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="mr-1 w-[55px]">
          <Volume />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[55px]" side="top" avoidCollisions={false}>
        <VerticalSlider
          className="h-[200px]"
          min={0}
          max={1}
          step={0.01}
          value={[volume]}
          onValueChange={([v]) => onVolumeChange(v!)}
        />
      </PopoverContent>
    </Popover>
  );
}
