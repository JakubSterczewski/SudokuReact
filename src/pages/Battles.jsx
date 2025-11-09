import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export default function BattlesPage() {
  const { battles } = useLoaderData();

  return (
    <>
      <p>Battles</p>

      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={battles}>
          {(loadedBattles) =>
            loadedBattles.map((battle) => <p key={battle.id}>{battle.name}</p>)
          }
        </Await>
      </Suspense>
    </>
  );
}

async function loadBattles() {
  //Load data from Backend

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Battle1" },
        { id: 2, name: "Battle2" },
      ]);
    }, 2000);
  });
}

export function loader() {
  return {
    battles: loadBattles(),
  };
}
