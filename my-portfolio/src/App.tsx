import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Header/Header';
import { Article } from './Article/Article';
import { Carousel } from './Carousel/Carousel';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <GlobalStyles/>
        <Article />
        <Carousel />
        <Footer />
      </>
    </div>
  );
}

export default App;
