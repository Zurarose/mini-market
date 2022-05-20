import React, {useCallback, useState} from 'react';
import {Box, Button, ButtonProps, Fab, Modal, styled, Typography} from "@mui/material";
import {MarketFields} from "../../Types/marketTypes";
import CloseIcon from '@mui/icons-material/Close';
import ValidateField from "../ValidateField";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const modalStyle = {
    position: 'absolute' as 'absolute',
    borderRadius: '24px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 400,
    bgcolor: 'background.paper',
    p: 6,
};

const CardContentBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    my: 4,
};

const CardContentBoxAlign = {
    display: 'flex',
};

const FabStyle = {
    position: 'absolute',
    top: -12,
    right: -12,
    boxShadow: 0,
    backgroundColor: '#F2F2F2'
};

const PurchaseBtn = styled(Button)<ButtonProps>(({theme}) => ({
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    backgroundColor: '#4BCFA0',
    "& .icon": {
        display: "none",
    },
    "&:hover": {
        "& .icon": {
            display: "block"
        }
    }
}));

interface PropTypes {
    openModal: boolean;
    toggleModal: () => void;
    purchaseItem: MarketFields;
}

const ModalWindow: React.FC<PropTypes> = ({openModal, toggleModal, purchaseItem}) => {
    const [name, setName] = useState<{ name: string, hasError?: boolean }>({name: "", hasError: true});
    const [number, setNumber] = useState<{ number: string, hasError?: boolean }>({number: "", hasError: true});
    const [callValidate, setCallValidate] = useState<boolean>(false);

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
        setCallValidate(true);
        if (!name.hasError && !number.hasError) {
            console.log(name, number)
        }
    }, [name, number]);

    return (
        <Modal open={openModal}>
            <Box sx={modalStyle}>
                <Fab onClick={toggleModal} sx={FabStyle} size="small" color="inherit">
                    <CloseIcon/>
                </Fab>
                <Typography textAlign="center" gutterBottom variant="subtitle1" component="div">
                    {purchaseItem.category}
                </Typography>
                <Typography textAlign="center" variant="h2" component="div">
                    {purchaseItem.name}
                </Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <Box sx={CardContentBoxStyle}>
                        <Box sx={CardContentBoxAlign}>
                            <Typography sx={{pr: 1}} variant="h3" component="span">
                                $
                            </Typography>
                            <Typography variant="h1" component="span">
                                {purchaseItem.price}
                            </Typography>
                        </Box>
                    </Box>
                    <ValidateField name="Name" required={true} value={name.name} setValue={setName}
                                   onlyLetters={true} callValidate={callValidate}
                                   setCallValidate={setCallValidate}/>
                    <ValidateField name="Number" required={true} value={number.number} setValue={setNumber}
                                   onlyNumbers={true} limitation={12} callValidate={callValidate}
                                   setCallValidate={setCallValidate} />
                    <PurchaseBtn sx={{my: 3, p: 2,}} type="submit" endIcon={<ArrowForwardIcon className='icon'/>}
                                 fullWidth variant="contained">order</PurchaseBtn>
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalWindow;