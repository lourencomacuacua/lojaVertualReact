import React from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};
function SalesSommaryCard({ value, label, icon }: Props) {
  return (
    <div className="sales-sommary-card base-card">
      {icon}
      <h3 className="sales-sommary-card-value">{value}</h3>
      <span className="sales-sommary-card-label">{label}</span>
    </div>
  );
}

export default SalesSommaryCard;
