import { Pause, Play, PlayCircle } from "lucide-react";
import ReactPlayer from "react-player/lazy";
import { Slider } from "./ui/slider";
import { useState } from "react";
import { QualityCombobox } from "./quality-combobox";
import { IVideo } from "@consumet/extensions";
import { Button } from "./ui/button";
import { useRef } from "react";
import { cn } from "~/lib/cn";

interface Props {
  name: string;
  sources: IVideo[];
}

export function VideoPlayer({ name, sources }: Props) {
  const [quality, setQuality] = useState("default");
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [progressCount, setProgressCount] = useState(0);
  const videoRef = useRef<ReactPlayer>(null);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  const open = !playing || progressCount <= 1;

  const handleReady = () => {
    videoRef.current?.seekTo(played);
  };

  const handleProgress = (secs: number) => {
    setProgressCount(progressCount + 1);
    setPlayed(secs);
  };

  return (
    <div
      className="relative aspect-video w-full space-y-1 bg-black"
      onClick={togglePlaying}
      onMouseMove={() => setProgressCount(0)}
    >
      <ReactPlayer
        ref={videoRef}
        width="100%"
        height="100%"
        url={sources.find((s) => s.quality === quality)?.url}
        playing={playing}
        played={played}
        onReady={handleReady}
        onProgress={(p) => handleProgress(p.playedSeconds)}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between text-primary opacity-100 transition-all",
          !open && "cursor-none opacity-0"
        )}
      >
        <p className="ml-3 mt-1 text-3xl">{name}</p>
        <div className="flex justify-center">
          {!playing && (
            <Button className="h-full rounded-full p-0" onClick={togglePlaying}>
              <PlayCircle size={96} />
            </Button>
          )}
        </div>
        <div
          className="space-y-2 bg-gradient-to-t from-primary/50 to-black/0 px-2 pb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Slider
            min={0}
            max={videoRef.current?.getDuration()}
            value={[played]}
            onValueChange={([v]) => {
              setPlayed(v!);
              videoRef.current?.seekTo(v!);
            }}
          />
          <div className="mx-2 flex flex-row items-center justify-between">
            <Button onClick={togglePlaying}>
              {playing ? <Pause size={32} /> : <Play size={32} />}
            </Button>
            <QualityCombobox
              qualities={sources.map((s) => s.quality!)}
              value={quality}
              onValueChange={setQuality}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
