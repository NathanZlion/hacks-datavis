
import { createSlice } from "@reduxjs/toolkit";

export enum grandStateEnum {
    Initial = 'Initial',
    Loading = 'Loading',
    Error = 'Error',
    Loaded = 'Loaded'
}


/**
 * Grand slice would be a slice to encompass all other slices so that it's easier to refresh them all.
 */

export interface grandState {
    value: string
}

const initialState : grandState= {
    value: grandStateEnum.Initial
}

export const grandSlice = createSlice({
    name: 'grandSlice',
    initialState,
    reducers: {
        startLoading: state => {
            state.value = grandStateEnum.Loading;
        },
        resetLoading: state => {
            state.value = grandStateEnum.Initial;
        },
        loadComplete: state => {
            state.value = grandStateEnum.Loaded;
        },
        loadFailed: state => {
            state.value = grandStateEnum.Error;
        }
    }
});


export const { startLoading, loadComplete, loadFailed, resetLoading } = grandSlice.actions;


export default grandSlice.reducer;