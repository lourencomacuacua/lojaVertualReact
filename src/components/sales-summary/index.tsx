import React from 'react';
import './styles.css';
import SalesSommaryCard from './sales-sommary-card';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSommaryCard value={430} label="Média" icon={<DoneIcon />} />
      <SalesSommaryCard value={630} label="Quantidade" icon={<SyncIcon />} />
      <SalesSommaryCard value={130} label="Mínima" icon={<BarChartIcon />} />
      <SalesSommaryCard value={230} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
