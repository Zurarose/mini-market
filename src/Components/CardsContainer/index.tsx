import React from 'react';
import {connect} from "react-redux";
import Cards from "./Cards";
import {MarketFields} from "../../Types/marketTypes";
import {AppStateType} from "../../Store/store";
import {getProductsList, getStatus} from "../../Selectors/marketSelectors";
import {getProductsThunk} from "../../Store/MarketReducer";

interface MapStateToPropsType {
    ProductsList: ReadonlyArray<MarketFields>;
    Status: string | null;
}

interface MapDispatchToPropsType {
    getProductsThunk: () => void;
}

interface OwnPropsType {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const CardsContainer: React.FC<PropsType> = (props) => {
    return (<Cards {...props}/>);
};

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        ProductsList: getProductsList(state),
        Status: getStatus(state),
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {getProductsThunk})(CardsContainer);