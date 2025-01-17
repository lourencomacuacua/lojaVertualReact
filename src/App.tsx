import './App.css';

import { useState } from 'react';
import Header from './components/header';
import Filter from './components/filter';
import SalesByDate from './components/sales-by-dates';
import SalesSummary from './components/sales-summary';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
        </div>
      </div>
    </>
  );
};

export default App;
