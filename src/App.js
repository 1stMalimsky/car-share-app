import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from './routes/Router';
import { Container } from '@mui/material';


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
  return (
    <ThemeProvider theme={createTheme(light)}>
      <Container>
        <header></header>
        <main>
          <Router />
        </main>
        <footer></footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
