import { fetchChartsData } from '@/utils/actions';
import React from 'react';
import Chart from './Chart';


async function ChartsContainer() {
  const bookings = await fetchChartsData();

  if (bookings.length < 1) return null;

  return <Chart data={bookings} />;
}

export default ChartsContainer;
