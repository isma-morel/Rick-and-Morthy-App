import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Nav } from "./components/presentational/Nav/Nav";
import { theme } from "./theme/extendTheme";
import "@fontsource/dm-sans";
import "@fontsource/inter";
import { Home } from "./components/containers/Home/Home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Home />
    </ChakraProvider>
  );
}

export default App;
