import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        value: {}
    },
    reducers: {
        fetchCountries: state => {
            state.value = { name: 'Nigeria' };
        }
    }
});


export const { fetchCountries } = countriesSlice.actions;

export default countriesSlice.reducer;