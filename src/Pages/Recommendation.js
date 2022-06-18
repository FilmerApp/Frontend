import React, { useEffect, useState } from "react";
import { GetRecommendations } from "../API/RecommendationAPI"

export default function Recommendation(props) {
    return (
        <div>
            <h1> Recommendations </h1>
            <hr />
            <div>
                <h1> {props.name} </h1>
                <p />
                <p> <b> Rating: </b> {props.rating} </p>
                <p> <b> Genre(s):  </b> </p>
                <p> <b> Year of release: </b> {props.releaseYear} </p>
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.notInterested()}
                >
                    Not interested <span className="visually-hidden"></span>
                </button>
                <button
                    type="button"
                    className="btn btn__confirm"
                    onClick={() => props.addToWatchlist(props.id)}>
                    Add to watchlist <span className="visually-hidden"></span>
                </button>
            </div>
        </div>
    );
}