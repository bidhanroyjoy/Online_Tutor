import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Box from './components/Box'
import styled from 'styled-components'
import Section from './components/Section';
import Accordion from './components/Accordion'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Box />
      <Section />
      <Accordion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
