import './App.css';

import { useState } from 'react';
import Header from './components/header';
import Filter from './components/filter';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
};

export default App;
