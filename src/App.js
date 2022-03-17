import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import theme from './styles/themes/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div
                style={{
                    height: 'calc(100vh - 65px)',
                    backgroundColor: '${theme.palette.primary.dark}',
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                <h1 style={{ color: '#ffffff' }}>
                    Hello there,
                    <br />I am Davide Amato
                </h1>
            </div>
            <Container>
                <About />
                <Contact />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
