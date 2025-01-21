import './App.css';

import { useState } from 'react';
import Header from './components/header';
import Filter from './components/filter';
import SalesByDate from './components/sales-by-dates';
import SalesSummary from './components/sales-summary';
import PieChartCard from './components/pie-chart-card';
import SalesTable from './components/sales-table';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Matola', 'Maputo', 'Inhambane']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamentos"
            labels={['Crédito', 'Débito', 'Pagamento']}
            series={[20, 50, 30]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
};

export default App;
