import styled, { ThemeProvider } from "styled-components";
import CreateMessage from "./components/creater/createMessage";
import GlobalStyle from "./GlobalStyle";
import { marsTheme } from "./theme";
import ResultMessage from "./components/result/ResultMessage";
import Header from "./components/common/Header";

function App() {
    return (
        <ThemeProvider theme={marsTheme}>
            <GlobalStyle />
            <Header />
            <Main>
                <CreateMessage />
                <ResultMessage />
            </Main>
        </ThemeProvider>
    );
}

const Main = styled.main`
    display: flex;
`;

export default App;
