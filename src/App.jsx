import { createTheme, ThemeProvider } from "@mui/material/styles";
import Router from "./routes/Router";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/NavBar/MuiNav";
import "./index.css";
import { useSelector } from "react-redux";

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  const isDarkTheme = useSelector(
    (storePie) => storePie.darkThemeSlice.isDarkTheme
  );
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>
        <header>
          <Navbar />
        </header>
        <main>
          <Router />
        </main>
        <footer></footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
