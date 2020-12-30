import { range } from "lodash";

const filterArray = [
  {
    title: 'Launch Year',
    data: range(2006, 2021),
    filterKey: 'launch_year'
  },
  {
    title: 'Successful Launch',
    data: ['True', 'False'],
    filterKey: 'launch_success'
  },
  {
    title: 'Successful Landing',
    data: ['True', 'False'],
    filterKey: 'land_success'
  }
];

export default filterArray;
