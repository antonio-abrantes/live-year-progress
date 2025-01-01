import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { calculateYearProgress } from "@/lib/date";

interface YearProgressBarProps {
  isUTC: boolean;
}

export function YearProgressBar({ isUTC }: YearProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress(calculateYearProgress(isUTC));
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [isUTC]);

  return (
    <div className="w-full max-w-3xl">
      <div className="relative">
        <Progress 
          value={progress} 
          className="h-16 border-2 border-black rounded-lg"
          indicatorStyles="bg-blue-600 transition-all duration-1000"
        />
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          {progress.toFixed(8)}%
        </span>
      </div>
    </div>
  );
}