import { createSlice } from '@reduxjs/toolkit';
import { IHomePage } from '../../typings/Car';

const initialState: IHomePage = {
  topCars: [],
};

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = HomePageSlice.actions;
export default HomePageSlice.reducer;
