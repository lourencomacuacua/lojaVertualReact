import React, { useEffect, useState } from 'react';
import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';
import { makeRequest } from '../../utils/request';
const initialDate = [
  { x: '2020-01-01', y: 548 },
  { x: '2020-02-01', y: 190 },
  { x: '2020-3-01', y: 90 },
  { x: '2020-04-01', y: 54 },
];

function SalesByDate() {
  const [salesByDate, setSalesByDate] = useState();
  useEffect(() => {
    makeRequest
      .get('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE')
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        <span className="sales-by-date-period">15/01/2025 até 16/01/2025</span>
      </div>

      <div className="sales-by-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">464.988,00</h2>
          <span className="sales-by-date-quantity-label">
            Vendas no período
          </span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialDate }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
