import {MarketFields} from "../Types/marketTypes";
import {Dispatch} from "redux";
import {MarketApi} from "../API/marketApi";

const setProducts = "mini-market/MarketReducer/SET_PRODUCTS";
const setStatus = "mini-market/MarketReducer/SET_STATUS";

const initialState = {
    products: [] as ReadonlyArray<MarketFields>,
    payloadStatus: null as string | null,
};

type initialStateType = typeof initialState

const MarketReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case setProducts:
            return {
                ...state,
                products: action.payload
            };
        case setStatus:
            return {
                ...state,
                payloadStatus: action.payload
            };
        default:
            return state
    }
};

type ActionType = getProductsType | getStatusType

interface getProductsType {
    type: typeof setProducts
    payload: Array<MarketFields>
}

export const getProductsAC = (data: Array<MarketFields>): getProductsType => {
    return {
        type: setProducts,
        payload: data
    }
};

interface getStatusType{
    type: typeof setStatus
    payload: string | null
}

export const getStatusAC = (data: string | null): getStatusType => {
    return {
        type: setStatus,
        payload: data
    }
};

export const getProductsThunk = () => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            const result = await MarketApi.getProducts();
            dispatch(getProductsAC(result));
            dispatch(getStatusAC(null))
        } catch (error) {
            const message = (error as Error).message;
            dispatch(getStatusAC(message))
        }
    }
};

export default MarketReducer