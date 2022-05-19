import React, {useCallback, useState} from 'react';
import {Box, Button, Fab, Modal, styled, Typography} from "@mui/material";
import {MarketFields} from "../../Types/marketTypes";
import CloseIcon from '@mui/icons-material/Close';
import ValidateField from "../ValidateField";

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

const PurchaseBtn = styled(Button)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-color: #4BCFA0;

  :hover {
    box-shadow: 24px 24px 40px rgba(75, 207, 160, 0.08);
  }
`;

interface PropTypes {
    openModal: boolean;
    toggleModal: () => void;
    purchaseItem: MarketFields;
}

const ModalWindow: React.FC<PropTypes> = ({openModal, toggleModal, purchaseItem}) => {
    const [name, setName] = useState<{ name: string, hasError?: boolean }>({name: "", hasError: true});
    const [number, setNumber] = useState<{ number: string, hasError?: boolean }>({number: "", hasError: true});
    const [manualValidate, setManualValidate] = useState<boolean>(false);

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
        setManualValidate(true);
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
                                   onlyLetters={true} manualValidate={manualValidate}
                                   setManualValidate={setManualValidate}/>
                    <ValidateField name="Number" required={true} value={number.number} setValue={setNumber}
                                   onlyNumbers={true} limitation={12} manualValidate={manualValidate}
                                   setManualValidate={setManualValidate}/>
                    <PurchaseBtn sx={{my: 3, p: 2,}} type="submit" fullWidth variant="contained">order</PurchaseBtn>
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalWindow;