// export interface ICar {
//   thumbnailSrc: string;
//   name: string;
//   gearType: string;
//   monthlyPrice: number;
//   dailyPrice: number;
//   gas: string;
//   mileAge: string;
//   id: string;
// }

import { Car } from '../generated/graphql';

export interface IHomePage {
  topCars: Car[];
}
