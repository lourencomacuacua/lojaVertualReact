export type salesByDate = {
  date: string;
  sum: number;
};

export type ChartSeriesDate = {
  x: string;
  y: number;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};
