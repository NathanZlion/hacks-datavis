
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface peopleDataInterface {
    totalParticipants: number,
    individualParticipants: number,
    groups: number,
    countries: number
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        value: {
            totalParticipants: 0,
            individualParticipants: 0,
            groups: 0,
            countries: 0
        }
    },
    reducers: {
        updateParticipantsInfo: (state, payload: PayloadAction<peopleDataInterface>) => {
            state.value = payload.payload;
        }
    }
});

export const { updateParticipantsInfo } = peopleSlice.actions;

export default peopleSlice.reducer;