import { useEffect, useState } from "react";
import Confetti from "react-confetti";

interface NewYearCelebrationProps {
  show: boolean;
}

export function NewYearCelebration({ show }: NewYearCelebrationProps) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!show) return null;

  return (
    <>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={1000}
      />
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="text-6xl font-bold text-white animate-bounce">
          Happy New Year!
        </div>
      </div>
    </>
  );
}