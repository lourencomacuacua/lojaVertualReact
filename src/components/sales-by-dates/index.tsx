import React, { useEffect, useState } from 'react';
import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import { makeRequest } from '../../utils/request';
import { ChartSeriesDate, FilterData, salesByDate } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatter';

type Props = {
  filterDate?: FilterData;
};

function SalesByDate({ filterDate }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesDate[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest
      .get<salesByDate[]>(
        '/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE'
      )
      .then((response) => {
        const newChartSeries = buildChartSeries(response.data);
        console.log(response.data);
        setChartSeries(newChartSeries);
        const newTotalSum = sumSalesByDate(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales by date');
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        {filterDate?.dates && (
          <span className="sales-by-date-period">
            {formatDate(filterDate?.dates?.[0])} até{' '}
            {formatDate(filterDate?.dates?.[1])}
          </span>
        )}
      </div>

      <div className="sales-by-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
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
            series={[{ name: 'Vendas', data: chartSeries }]}
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
