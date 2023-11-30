import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

export const initialState =  {
        items:[],
        isLoading:  false,
        error: null,
        filter:'',
        favourites:[]
    }
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers:{
        setFilter(state, action) {
            state.filter = action.payload;
          },
          setFavourites(state, action){
            state.favourites = action.payload; 
          }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCars.pending, state =>{
            state.isLoading = true;
            state.filter = '';
        }).addCase(fetchCars.fulfilled,  (state, action)=>{
            state.isLoading = false;
            state.items = action.payload;
        }).addCase(fetchCars.rejected,  (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});
export const {setFilter, setFavourites} = carSlice.actions;
export const selectCars = state => state.items;
export const selectFilter = state =>  state.filter;
export const selectFavourites =state => state.favourites;
export const carReducer = carSlice.reducer;


