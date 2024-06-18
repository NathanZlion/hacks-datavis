
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface prevParticipationDataInterface {
    individualYes: number;
    individualNo: number;
    groupYes: number;
    groupNo: number;
}

export const prevParticipationSlice = createSlice({
    name: 'prev-participation',
    initialState: {
        value: {
            payload: {
                individualYes: 0,
                individualNo: 0,
                groupYes: 0,
                groupNo: 0,
            }
        }
    },
    reducers: {
        updatePrevParticipationData: (state, payload: PayloadAction<prevParticipationDataInterface>) => {
            state.value = payload;
        }
    }
});

export const { updatePrevParticipationData } = prevParticipationSlice.actions;

export default prevParticipationSlice.reducer;
