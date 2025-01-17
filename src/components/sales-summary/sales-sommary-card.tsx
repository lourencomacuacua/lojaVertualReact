import React from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
function SalesSommaryCard() {
  return (
    <div className="sales-sommary-card base-card">
      <AvatarIcon />
      <h3 className="sales-sommary-card-value">534.00</h3>
      <span className="sales-sommary-card-label">Média</span>
    </div>
  );
}

export default SalesSommaryCard;
