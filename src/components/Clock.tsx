import { useEffect, useState } from "react";
import { getLocalTime, getUTCTime } from "@/lib/date";
import { TimeToggle } from "./TimeToggle";

interface ClockProps {
  onTimeFormatChange: (isUTC: boolean) => void;
}

export function Clock({ onTimeFormatChange }: ClockProps) {
  const [time, setTime] = useState("");
  const [isUTC, setIsUTC] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(isUTC ? getUTCTime() : getLocalTime());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isUTC]);

  const toggleTimeFormat = () => {
    const newIsUTC = !isUTC;
    setIsUTC(newIsUTC);
    onTimeFormatChange(newIsUTC);
  };

  return (
    <div className="text-center mt-8">
      <div className="text-6xl font-bold tracking-wider animate-pulse">
        {time}
      </div>
      <div className="text-xl mt-2 text-black/80">
        {isUTC ? "Universal Time (UTC)" : "Local Time"}
      </div>
      <TimeToggle isUTC={isUTC} onToggle={toggleTimeFormat} />
    </div>
  );
}