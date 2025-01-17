import React from 'react';
import './styles.css';
import SalesSommaryCard from './sales-sommary-card';
function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSommaryCard />
      <SalesSommaryCard />
      <SalesSommaryCard />
      <SalesSommaryCard />
    </div>
  );
}

export default SalesSummary;
