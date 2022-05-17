import React from 'react';
import defaultTheme from "./Common/MaterialTheme/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import RootComponent from "./Components/RootComponent";
import {UIContextProvider} from "./Common/UIContext";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <UIContextProvider>
                <RootComponent/>
            </UIContextProvider>
        </ThemeProvider>
    );
}
export default App;
