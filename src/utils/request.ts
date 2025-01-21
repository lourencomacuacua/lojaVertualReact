import axios from 'axios';
import { formatDateToServer } from './formatter';
import { FilterData } from '../types';

const baseURL = 'http://localhost:8080';
export const makeRequest = axios.create({ baseURL });

export const buldFilterParams = (filterData?: FilterData) => {
  return {
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender,
  };
};
