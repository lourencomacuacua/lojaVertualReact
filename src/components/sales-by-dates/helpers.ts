import { ApexOptions } from 'apexcharts';
import { salesByDate } from '../../types';

export const chartOptions = {
  legend: {
    show: false,
  },
  noData: {
    text: 'Sem resultados',
    align: 'center',
    verticalAlign: 'middle',
    offsetY: -15,
    style: {
      color: '#FFF',
      fontSize: '18px',
      fontFamily: 'Roboto, sans-serif',
    },
  },
  chart: {
    foreColor: '#4b4ed2',
    height: 240,
    width: 1000,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {},
  fill: {
    opacity: 1,
    colors: ['#3e82f7'],
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val: number) {
        return `R$ ${val}`;
      },
    },
  },
} as ApexOptions;

export const buildChartSeries = (salesByDate: salesByDate[] = []) => {
  return salesByDate.map(({ date, sum }) => ({
    x: date,
    y: sum,
  }));
};

export const sumSalesByDate = (salesByDate: salesByDate[] = []) => {
  return salesByDate.reduce((previusValue, currentValue) => {
    return previusValue + currentValue.sum;
  }, 0);
};
