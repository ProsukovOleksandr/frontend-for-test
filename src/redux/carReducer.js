import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarByID } from './operations';

export const initialState = {
  items: [],
  isLoading: false,
  isLoadingModal: false,
  error: null,
  filter: '',
  favourites: [],

  currentCar:{},
  isShowModal: false,
  isBtn:true,
  page:1
};
const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setFavourites(state, action) {
      state.favourites = action.payload;
    },
    setShowModal(state, action) {
      state.isShowModal = action.payload;
    },
    setCurrentCar(state, action){
      state.currentCar = action.payload;
    },
    setIsBtn(state, action){
      state.isBtn = action.payload
    },
    setPage(state, action){
      state.page = action.payload
    }

  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.filter = '';
        state.currentCar = null;
        state.isShowModal = false;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(...action.payload);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarByID.pending, state => {
        state.isLoadingModal = true;
      })
      .addCase(fetchCarByID.fulfilled, (state, action) => {
        state.currentCar = action.payload;
        state.isLoadingModal = false;

      })
      .addCase(fetchCarByID.rejected, (state, action) => {
        state.isLoadingModal = false;
        state.error = action.payload;
      });
  },
});
export const { setFilter, setFavourites, setShowModal, setCurrentCar, setIsBtn, setPage  } =
  carSlice.actions;
export const selectCars = state => state.items;
export const selectFilter = state => state.filter;
export const selectFavourites = state => state.favourites;
export const selectShowModal = state => state.isShowModal;
export const selectCurrentCar = state => state.currentCar;
export const selectPage = state => state.page;
export const selectIsBtn = state=> state.isBtn;

export const carReducer = carSlice.reducer;
