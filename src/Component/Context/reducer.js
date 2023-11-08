import * as actions from './ActionType'
 export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [action.paylod, ...state.watchlist],
            };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) =>
                    movie.imdbId !== action.paylod
                ),
            };

        case actions.MOVE_TO_WATCHLIST:
            return {
                ...state,
                watched: state.watched.filter((movie) =>
                    movie.imdbId !== action.paylod.imdbId
                ),
                watchlist: [action.paylod, ...state.watchlist],
            };
        case actions.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) =>
                    movie.imdbId !== action.paylod.imdbId),
                watched: [action.paylod, ...state.watched],
            };
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter((movie) =>
                    movie.imdbId !== action.paylod
                ),
            };
        default:
            return state;
    }
}
