import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Ourmenu from './Components/Ourmenu';
import { Ourproduct } from './Components/Ourproduct';
import Cutomer from './Components/Cutomer';
import Contact from './Components/Contact';
import Logs from './Components/Logs';
import Fotter from './Components/Fotter';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Home data-aos="fade-up" />
      <About data-aos="fade-right" />
      <Ourmenu data-aos="fade-left" />
      <Ourproduct data-aos="fade-up" />
      <Cutomer data-aos="fade-down" />
      <Contact data-aos="fade-up-right" />
      <Logs data-aos="fade-up-left" />
      <Fotter data-aos="fade-up" />
    </>
  );
}

export default App;
