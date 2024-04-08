import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        value: {}
    },
    reducers: {
        updateCountries: (state, payload: PayloadAction< {} | Map<string, number>>) => {
            state.value = payload;
        }
    }
});


export const { updateCountries } = countriesSlice.actions;

export default countriesSlice.reducer;