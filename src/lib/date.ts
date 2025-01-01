// Utility functions for date calculations
export function calculateYearProgress(useUTC: boolean = false): number {
  const now = new Date();
  const year = useUTC ? now.getUTCFullYear() : now.getFullYear();
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year + 1, 0, 1));
  
  const current = useUTC ? now.getTime() : now.getTime() - (now.getTimezoneOffset() * 60000);
  const total = end.getTime() - start.getTime();
  const elapsed = current - start.getTime();
  
  return (elapsed / total) * 100;
}

export function getLocalTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  
  return `${hours} : ${minutes} : ${seconds}`;
}

export function getUTCTime(): string {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");
  
  return `${hours} : ${minutes} : ${seconds}`;
}

export function isNewYear(): boolean {
  const now = new Date();
  return (
    now.getMonth() === 11 && 
    now.getDate() === 31 && 
    now.getHours() === 23 && 
    now.getMinutes() === 59 && 
    now.getSeconds() === 59
  );
}