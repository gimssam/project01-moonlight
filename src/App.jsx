import IconSprite from './components/IconSprite.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Location from './components/Location.jsx';
import Reservation from './components/Reservation.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <IconSprite />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Location />
      <Reservation />
      <Footer />
    </>
  );
}
