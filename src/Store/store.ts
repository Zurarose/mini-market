import {applyMiddleware, combineReducers, createStore} from "redux";
import MarketReducer from "./MarketReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    MarketPage: MarketReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>

export default store;