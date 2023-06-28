import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from './routes/Router';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import "./index.css"
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
      <Container>
        <header><NavBar /></header>
        <main>
          <Router />
        </main>
        <footer></footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
