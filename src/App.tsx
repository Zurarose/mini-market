import React from 'react';
import defaultTheme from "./Common/MaterialTheme/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import RootComponent from "./Components/RootComponent";
import {UIContextProvider} from "./Common/UIContext";
import {Provider} from "react-redux";
import store from "./Store/store";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline/>
                <UIContextProvider>
                    <RootComponent/>
                </UIContextProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
