import {Box, Button, Card, CardContent, CardProps, styled, Typography} from "@mui/material";
import {MarketFields} from "../../../../Types/marketTypes";
import React from "react";

const CustomizedCard = styled(Card)<CardProps>(({theme}) => ({
    borderRadius: '24px',
    boxShadow: 'none',
    padding: '1em',
    '&:hover': {
        boxShadow: '24px 24px 40px #4BCFA014',
    }
}));

const CardContentBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 4
};
const CardContentBoxAlign = {
    display: 'inherit',
};

interface PropTypes {
    purchase: (product: MarketFields) => void;
}

const ItemCard: React.FC<MarketFields & PropTypes> = ({name, price, category, purchase}) => {
    return (
        <CustomizedCard>
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {category}
                </Typography>
                <Typography variant="h2" component="div">
                    {name}
                </Typography>

                <Box sx={CardContentBoxStyle}>
                    <Box sx={CardContentBoxAlign}>
                        <Typography sx={{pr: 1}} variant="h3" component="span">
                            $
                        </Typography>
                        <Typography variant="h1" component="span">
                            {price}
                        </Typography>
                    </Box>
                    <Button sx={{m: 1}} onClick={() => purchase({name,price, category})} variant="outlined">buy</Button>
                </Box>
            </CardContent>
        </CustomizedCard>
    );
};

export default ItemCard;