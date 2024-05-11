import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Header/Header';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <GlobalStyles/>
      </>
    </div>
  );
}

export default App;
