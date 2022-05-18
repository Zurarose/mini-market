import {AppStateType} from "../Store/store";

export function getProductsList(state: AppStateType) {
    return state.MarketPage.products;
}

export function getStatus(state: AppStateType) {
    return state.MarketPage.payloadStatus;
}