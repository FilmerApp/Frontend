import React, { useEffect, useState } from "react";
import { GetRecommendations } from "../API/RecommendationAPI"
import { AddToWatchlist } from "../API/WatchlistAPI"
import { Routes, Route } from 'react-router-dom';

import Watchlist from '../Pages/Watchlist';
import Recommendation from '../Pages/Recommendation';

const Main = () => {
    const [films, setFilms] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (films.length === 0) {
            console.log("Loading recommendations");
            GetRecommendations(1).then(json => {
                setFilms(json)
            });
        }
    });

    function notInterested() {
        if (index < films.length - 1) {
            setIndex(index + 1);
            console.log("Next film, index:" + index);
        } else {
            console.log("Out of recommendations, loading new ones");
            setIndex(0);
            GetRecommendations(1).then(json => {
                setFilms(json)
            });
        }
    }

    function addToWatchlist(id) {
        console.log("Adding to watchlist");
        AddToWatchlist(1, id);
        setIndex(index + 1);
    }

    const filmList = films.map(film =>
        <Recommendation
            id={film.id}
            name={film.name}
            releaseYear={film.releaseYear}
            rating={film.rating}
            genres={film.genres}
            notInterested={notInterested}
            addToWatchlist={addToWatchlist}
        />
    )

    return (
        <Routes>
            <Route path='/' element={<Watchlist />}></Route>
            <Route path='/recommendations' element={filmList[index]}>
            </Route>
        </Routes>
    );
}

export default Main;