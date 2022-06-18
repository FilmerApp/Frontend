export const GetWatchlist = async (id) => {
    let res = await
        fetch("https://localhost:7022/api/Watchlist/GetWatchlist?userId=" + id, {
            method: "GET"
        });
    return ((res.status === 200) ? res.json() : res);
}

export const GetLikedFilms = async (id) => {
    let res = await
        fetch("https://localhost:7022/api/Watchlist/GetLikedFilms?userId=" + id, {
            method: "GET"
        });
    return ((res.status === 200) ? res.json() : res);
}

export const AddToWatchlist = async (userId, filmId) => {
    let res = await fetch("https://localhost:7022/api/Watchlist/AddToWatchlist?userId=" + userId + "&filmId=" + filmId, {
        method: "POST"
    });
    return (res.status);
}

export const MarkAsWatched = async (userId, filmId) => {
    let res = await
        fetch("https://localhost:7022/api/Watchlist/MarkAsWatched?userId=" + userId + "&filmId=" + filmId, {
            method: "POST"
        });
    return (res.status);
}

export const LikeFilm = async (userId, filmId) => {
    let res = await
        fetch("https://localhost:7022/api/Watchlist/LikeFilm?userId=" + userId + "&filmId=" + filmId, {
            method: "POST"
        });
    return (res.status);
}

export const DislikeFilm = async (userId, filmId) => {
    let res = await
        fetch("https://localhost:7022/api/Watchlist/DislikeFilm?userId=" + userId + "&filmId=" + filmId, {
            method: "POST"
        });
    return (res.status);
}