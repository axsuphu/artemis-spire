import React, { useState, useEffect } from "react";
import game_data from "../../assets/data/games_list.json";
import NeonTitle from "../../components/NeonTitle";
import Bestsellers from "./Bestsellers";
import AvailableNow from "./AvailableNow";

const GamesPage = () => {
  //About half of games will have their own page which can be routed to.
  //Other games will just be a list of cards that do not have their own pages.
  const [gamesPagesList, setGamesPagesList] = useState([]);
  const [noPageGamesList, setNoPageGamesList] = useState([]);

  useEffect(() => {
    const pageAvailableList = [];
    const pageNotAvailableList = [];
    game_data["games"].map((game, index) => {
      //The game object will have an abbreviation property if a folder exists
      const folder = game.abbreviation;
      //If folder exists, add the game object to an array containing games that have their own pages.
      //Otherwise add to pageNotAvailableList array
      if (folder) {
        pageAvailableList.push(game);
        return;
      } else {
        pageNotAvailableList.push(game);
        return;
      }
    });
    setGamesPagesList(pageAvailableList);
    setNoPageGamesList(pageNotAvailableList);
  }, []);

  return (
    <main id="games" className="relative w-screen max-w-1920">
      <NeonTitle title="G A M E S" color="pink" />
      <Bestsellers list={gamesPagesList} />
    </main>
  );
};

export default GamesPage;
