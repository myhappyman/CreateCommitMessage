import React from "react";
import styled, { ThemeProvider } from "styled-components";
import CreateMessage from "./components/creater/createMessage";
import GlobalStyle from "./GlobalStyle";
import { marsTheme } from "./theme";
import ResultMessage from "./components/result/ResultMessage";

function App() {
    return (
        <ThemeProvider theme={marsTheme}>
            <GlobalStyle />
            <Main>
                <CreateMessage />
                <ResultMessage />
            </Main>
        </ThemeProvider>
    );
}

const Main = styled.main``;

export default App;
