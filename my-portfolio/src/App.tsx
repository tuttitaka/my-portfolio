import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Header/Header';
import { Article } from './Article/Article';
import { Carousel } from './Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <GlobalStyles/>
        <Article />
        <Carousel />
      </>
    </div>
  );
}

export default App;
