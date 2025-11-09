import { useLoaderData } from "react-router-dom";

export default function BattlePage() {
  const data = useLoaderData();

  return <p>Battle</p>;
}

export async function battleLoader() {
  //Load data from Backend

  throw new Response(
    JSON.stringify({
      title: "Battle not found",
      message: "This battle does not exist anymore.",
    }),
    {
      status: 500,
    },
  );
}
