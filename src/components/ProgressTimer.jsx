import { useEffect, useState } from "react";

export default function ProgressTimer({ time }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 10) {
          clearInterval(interval);
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [time]);

  return <progress max={time} value={timeLeft} />;
}
