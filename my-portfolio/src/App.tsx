import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Header/Header';
import { Article } from './Article/Article';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <GlobalStyles/>
        <Article />
      </>
    </div>
  );
}

export default App;
