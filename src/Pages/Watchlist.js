import React, { useState, useEffect } from 'react';
import { GetWatchlist, MarkAsWatched, LikeFilm, DislikeFilm } from "../API/WatchlistAPI"
import WatchlistItem from "../components/WatchlistItem"
import FilterButton from "../components/FilterButton";

const FILTER_MAP = {
    All: () => true,
    Unwatched: item => !item.watched,
    Liked: item => item.liked
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function Watchlist() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        if (items.length === 0) {
            console.log("Loading films");
            GetWatchlist(1).then(json => {
                setItems(json)
            });
        }
    });

    function markFilmWatched(id) {
        const updatedList = items.map(item => {
            if (id == item.film.id) {
                return { ...item, watched: true }
            }
            return item;
        });
        setItems(updatedList);
        MarkAsWatched(1, id);
    }

    function likeFilm(id) {
        if (this.watched === true) {
            const updatedList = items.map(item => {
                if (id == item.film.id) {
                    return { ...item, liked: true }
                }
                return item;
            });
            console.log("liking film");
            setItems(updatedList);
            LikeFilm(1, id);
        }
        console.log("can't like film, not seen")
    }

    function dislikeFilm(id) {
        if (this.watched === true) {
            const updatedList = items.map(item => {
                if (id == item.film.id) {
                    return { ...item, liked: false }
                }
                return item;
            });
            console.log("disliking film");
            setItems(updatedList);
            DislikeFilm(1, id);
        }
        console.log("can't dislike film, not seen")
    }

    const watchlist = items.filter(FILTER_MAP[filter]).map(item =>
        <WatchlistItem
            id={item.id}
            filmId={item.film.id}
            name={item.film.name}
            watched={item.watched}
            liked={item.liked}
            key={item.id}
            markFilmWatched={markFilmWatched}
            likeFilm={likeFilm}
            dislikeFilm={dislikeFilm}
        />
    );

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const listNoun = watchlist.length !== 1 ? 'films' : 'film';
    const headingText = `${watchlist.length} ${listNoun} on your list`;

    return (
        <>
            <div className="todoapp stack-large">
                <h1>Watchlist</h1>
                <div className="filters btn-group stack-exception">
                    {filterList}
                </div>
                <h3 id="list-heading">
                    {headingText}
                </h3>
                <ul
                    role="list"
                    className="watchlist stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {watchlist}
                </ul>
            </div> 
        </>
        
    );
}