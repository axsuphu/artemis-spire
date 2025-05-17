import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import game_data from "./assets/data/games_list.json";

// Lazy-load all components
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const GamesPage = lazy(() => import("./pages/GamesPage/GamesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const GameDetailPage = lazy(() => import("./pages/GameDetailPage"));
const LoadingPage = lazy(() => import("./components/LoadingPage"));

const App = () => {
  //for each game in list, render a route path="/abbreviation"
  const gamesList = game_data["games"];
  const pagesRoutes = gamesList.map((game) => {
    //If game abbreviation exists, return route compnent for it
    if (game.abbreviation) {
      const pagePath = `/games/${game.abbreviation}`;
      return (
        <Route
          path={`/games/${game.abbreviation}`}
          key={`${game.abbreviation}`}
          element={<GameDetailPage game={game} />}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            {pagesRoutes}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
