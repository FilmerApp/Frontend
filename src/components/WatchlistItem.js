import React from "react";

export default function WatchlistItem(props) {

    return (
        <li className="todo">
            <div className="stack-small">
                <h2>
                    {props.name}
                </h2>
                <div className="c-cb">
                    <input
                        id={props.id}
                        type="checkbox"
                        defaultChecked={props.watched}
                        disabled={props.watched}
                        onChange={() => props.markFilmWatched(props.filmId)}
                    />
                    <label className="todo-label" htmlFor={props.id}>
                        Watched
                    </label>
                </div>
                <div className="c-cb">
                    <input
                        id={props.id + 'a'}
                        type="checkbox"
                        defaultChecked={props.liked}
                        disabled={props.liked}
                        onChange={() => props.likeFilm(props.filmId)}
                    />
                    <label className="todo-label" htmlFor={props.id}>
                        Liked
                    </label>
                </div>
                <div className="c-cb">
                    <input
                        id={props.id + 'b'}
                        type="checkbox"
                        defaultChecked={(props.liked === null) ? false : !props.liked}
                        disabled={(props.liked === null) ? false : !props.liked}
                        onChange={() => props.dislikeFilm(props.filmId)}
                    />
                    <label className="todo-label" htmlFor={props.id}>
                        Disliked
                    </label>
                </div>
            </div>
        </li>
    );
}