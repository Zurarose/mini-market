import {Alert, Snackbar} from "@mui/material";
import React, {createContext, useState, FC} from "react";

export const UIContext = createContext<UIContextPropsAlert>({} as UIContextPropsAlert);

type AlertColor = 'success' | 'info' | 'warning' | 'error';

interface UIContextTypeAlert {
    show: boolean;
    severity?: AlertColor;
    message?: string;
}

interface UIContextPropsAlert {
    setAlert: React.Dispatch<React.SetStateAction<UIContextTypeAlert>>;
}

interface PropTypes {
    children?: React.ReactNode
}

export const UIContextProvider: FC<PropTypes> = ({children}) => {
    const [alert, setAlert] = useState<UIContextTypeAlert>({
        show: false,
        severity: 'info',
        message: '',
    });
    const handleCloseAlert = () =>
        setAlert({
            show: false,
        });

    return (
        <UIContext.Provider value={{setAlert}}>
            {children}
            <Snackbar
                open={alert.show}
                autoHideDuration={4000}
                onClose={handleCloseAlert}
            >
                <Alert elevation={6} variant="filled" severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </UIContext.Provider>
    );
};
