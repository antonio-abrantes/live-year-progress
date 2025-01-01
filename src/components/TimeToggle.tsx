import { Button } from "@/components/ui/button";
import { Clock, Globe } from "lucide-react";

interface TimeToggleProps {
  isUTC: boolean;
  onToggle: () => void;
}

export function TimeToggle({ isUTC, onToggle }: TimeToggleProps) {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      className="mt-4 bg-white/90 hover:bg-white transition-colors duration-200"
    >
      {isUTC ? (
        <Globe className="mr-2 h-4 w-4" />
      ) : (
        <Clock className="mr-2 h-4 w-4" />
      )}
      {isUTC ? "Show Local Time" : "Show UTC Time"}
    </Button>
  );
}