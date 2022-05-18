import React, {useCallback, useContext, useEffect, useState} from 'react';
import {MarketFields} from "../../../Types/marketTypes";
import {UIContext} from "../../../Common/UIContext";
import {Box, Button, Container, Grid} from "@mui/material";
import ItemCard from "./ItemCard";
import ModalWindow from "../../ModalWindow";

interface PropTypes {
    ProductsList: ReadonlyArray<MarketFields>;
    Status: string | null;
    getProductsThunk: () => void;
}

const MainBox = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5em',
}

const Cards: React.FC<PropTypes> = (props) => {
    const {setAlert} = useContext(UIContext)
    const [openModal, setOpenModal] = useState(false)

    const purchase = useCallback(() => {
        setOpenModal(true)
    }, [])

    const cheapestBuy = useCallback(() => {
        const cheapest = props.ProductsList.reduce((prev, curr) => {
            return prev.price < curr.price ? prev : curr;
        });
        purchase()
    }, [props.ProductsList, purchase])

    useEffect(() => {
        if (props.Status) {
            setAlert({
                show: true,
                message: props.Status,
                severity: 'error',
            })
        }
        props.getProductsThunk()
    }, [props, setAlert])


    return (
        <Container>
            <Box sx={MainBox}>
                <Grid container spacing={5}>
                    {props.ProductsList.map((item) => {
                        return (
                            <Grid key={item.category + item.name + item.price} item xs={12} sm={6} md={4}>
                                <ItemCard category={item.category} name={item.name} price={item.price}/>
                            </Grid>)
                    })}
                </Grid>
                <ModalWindow isOpen={openModal}/>
                <Button sx={{mt: 8}} variant="contained" onClick={cheapestBuy}>Buy cheapest</Button>
            </Box>
        </Container>
    );
};

export default Cards;