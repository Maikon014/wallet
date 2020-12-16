import React from 'react';
import {Container, Tag} from './sytles';


interface IHistoryFinanceCardPros{
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardPros> = ({
  tagColor, 
  title, 
  subtitle, 
  amount
}) => (

  <Container>
    <Tag color={tagColor} />

    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
);

export default HistoryFinanceCard;