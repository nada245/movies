import React from 'react';
import './ResultCard.css';
import { useMovieContext } from './Context/GolbalContext';

import * as actions from './Context/ActionType';

const ResultCard = ({ movie }) => {
    const MovieContext = useMovieContext();

    const storeMovie = MovieContext.watchlist.find((s) => s && s.imdbID === movie.imdbID);
    const storeMovieWatched = MovieContext.watched.find((s) =>s && s.imdbID === movie.imdbID);

    const WatchlistDisabled = storeMovie ? true :storeMovieWatched?true: false;
    const WatchedDisabled = storeMovieWatched ? true : false;

    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {movie.Poster ? (
                    <img src={movie.Poster} alt={movie.title} />
                ) : (
                    <div className='filter-poster'></div>
                )}
            </div>
            <div className='info'>
                <div className='heading'>
                    <h3 className='title'>{movie.Title}</h3>
                    {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : "-"}
                </div>
                <div className='controls'>
                    <button
                        onClick={() =>
                            MovieContext.MoviesDispatch({
                                type: actions.ADD_MOVIE_TO_WATCHLIST,
                                payload: movie,
                            })
                        }
                        className='btn'
                        disabled={WatchlistDisabled}
                    >
                        Add to Watchlist
                    </button>
                    <button
                        onClick={() =>
                            MovieContext.MoviesDispatch({
                                type: actions.ADD_MOVIE_TO_WATCHED,
                                payload: movie,
                            })
                        }
                        className='btn'
                        disabled={WatchedDisabled}
                    >
                        Add to Watched
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;


