import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Nav } from "./components/presentational/Nav/Nav";
import { theme } from "./theme/extendTheme";
import "@fontsource/dm-sans";
import "@fontsource/inter";
import { Home } from "./components/containers/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
