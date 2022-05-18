import React, {useEffect} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CardContentBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 4
}
const CardContentBoxAlign = {
    display: 'flex',
    alignContent: 'flex-start',
}

interface PropTypes {
    isOpen: boolean
}

const ModalWindow: React.FC<PropTypes> = ({isOpen}) => {
    const [open, setOpen] = React.useState(isOpen);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        isOpen ? handleOpen() : handleClose()
    }, [isOpen])

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Typography gutterBottom variant="subtitle1" component="div">
                    1
                </Typography>
                <Typography variant="h2" component="div">
                    2
                </Typography>

                <Box sx={CardContentBoxStyle}>
                    <Box sx={CardContentBoxAlign}>
                        <Typography sx={{pr: 1}} variant="h3" component="span">
                            $
                        </Typography>
                        <Typography variant="h1" component="span">
                            3
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Modal>


    );
};

export default ModalWindow;