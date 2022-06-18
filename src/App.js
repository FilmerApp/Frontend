import React, { useState, useEffect } from 'react';
import { GetWatchlist, MarkAsWatched, LikeFilm, DislikeFilm } from "./API/WatchlistAPI"
import WatchlistItem from "./components/WatchlistItem"
import FilterButton from "./components/FilterButton";
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';
import Watchlist from "./Pages/Watchlist"
import { Outlet } from 'react-router-dom';

function App(props) {
    return (
        <>
            <div>
                <NavigationBar />
                <Main/>
                <Outlet />
            </div>
        </>
        
    );
}


export default App;
