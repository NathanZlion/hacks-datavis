import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface countryData {
    [key: string]: {
        numberOfIndividualParticipants: number;
        numberOfGroupParticipants: number;
    };
}


export const countriesSlice = createSlice({
    name: 'countries',
    initialState: { value: { payload: {} } },
    reducers: {
        updateCountries: (state, payload: PayloadAction<countryData>) => {
            state.value = payload;
        }
    }
});


export const { updateCountries } = countriesSlice.actions;

export default countriesSlice.reducer;