import React, { useState, useEffect } from "react";
import { fetchGames } from "../../api/games";
import NeonTitle from "../../components/NeonTitle";

const GamesPage = () => {
  //Each game has a card of its own. Front of card is title and picture. Back of card are details
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <main id="games" className="relative w-screen max-w-1920">
      <NeonTitle title="G A M E S" color="pink" />
    </main>
  );
};

export default GamesPage;
