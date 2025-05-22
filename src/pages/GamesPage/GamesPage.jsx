import React, { useState, useEffect } from "react";
import data from "../../../public/fake_games.json";
import NeonTitle from "../../components/NeonTitle";
import GameCard from "./GameCard";

const GamesPage = () => {
  const gamesList = data["data"].map((game) => {
    return <GameCard gameInfo={game} />;
  });

  return (
    <main id="games" className="relative w-screen max-w-1920">
      <NeonTitle title="G A M E S" color="pink" />
      <div className="mx-4 grid grid-cols-2 md:mx-10 lg:mx-20 lg:grid-cols-3 2xl:grid-cols-4">
        {gamesList}
      </div>
    </main>
  );
};

export default GamesPage;
