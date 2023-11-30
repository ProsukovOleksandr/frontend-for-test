import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://64f02e228a8b66ecf7793cca.mockapi.io"

export const fetchCars = createAsyncThunk("cars/fetchCars", async(_, thunkAPI)=>{
    try {
        const response = await axios.get("adverts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
} )

