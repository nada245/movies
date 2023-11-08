import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
const initState = {
    watchlist: [],
    watched: []
};
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_TO_WATCHLIST":
//             return {
//                 ...state,
//                 watchlist: [...state.watchlist, action.payload],
//             };
//         case "ADD_TO_WATCHED":
//             return {
//                 ...state,
//                 watched: [...state.watched, action.payload],
//             };
//         // Handle other cases as needed
//         default:
//             return state;
//     }
// };
export const GlobalContext = createContext(initState);
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            MoviesDispatch: dispatch
        }}>

            {children}
        </GlobalContext.Provider>
    );

};
export default ContextProvider;
export const useMovieContext=()=>{
    return useContext(GlobalContext);
}