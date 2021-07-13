import { createReducer } from "@reduxjs/toolkit";
import { updateStartBlockNumber, updateEndBlockNumber } from "./actions";

export interface ApplicationState {
    startBlockNumber: string,
    endBlockNumber: string,
};

const initialState: ApplicationState = {
    startBlockNumber: "",
    endBlockNumber: "",
};

export default createReducer(initialState, builder => {
    builder
        .addCase(updateStartBlockNumber, (state, {payload: {blockNumber}}) => {
            state.startBlockNumber = blockNumber ? blockNumber : "";
        })
        .addCase(updateEndBlockNumber, (state, {payload: {blockNumber}}) => {
            state.endBlockNumber = blockNumber ? blockNumber : "";
        })
});
