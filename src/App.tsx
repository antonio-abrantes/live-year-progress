import { useEffect, useState } from "react";
import { YearProgressBar } from "@/components/YearProgressBar";
import { Clock } from "@/components/Clock";
import { NewYearCelebration } from "@/components/NewYearCelebration";
import { isNewYear } from "@/lib/date";

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [isUTC, setIsUTC] = useState(false);

  useEffect(() => {
    const checkNewYear = () => {
      if (isNewYear()) {
        setShowCelebration(true);
        setTimeout(() => {
          setShowCelebration(false);
        }, 10000);
      }
    };

    const interval = setInterval(checkNewYear, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold mb-12 text-black">
          Live Year Progress
        </h1>

        <YearProgressBar isUTC={isUTC} />
        <Clock onTimeFormatChange={setIsUTC} />
        <NewYearCelebration show={showCelebration} />
        <div style={{ fontSize: "11px", position: "absolute", bottom: "10px" }}>
          By Toni Abrantes © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

export default App;
