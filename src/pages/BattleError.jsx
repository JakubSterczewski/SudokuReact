import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import ProgressTimer from "../components/ProgressTimer";

export default function BattleErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const TIME = 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/battles");
    }, TIME);

    return () => clearTimeout(timeout);
  }, []);

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    const data = JSON.parse(error.data);
    title = data.title;
    message = data.message;
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-amber-500 text-center">
      <p className="mb-2 text-2xl font-bold">{title}</p>
      <p className="text-lg">{message}</p>
      <ProgressTimer time={TIME} />
    </div>
  );
}
