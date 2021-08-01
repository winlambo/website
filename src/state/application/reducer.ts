import { createReducer } from "@reduxjs/toolkit";
import { updateStartBlockNumber, updateEndBlockNumber, updateRewardsModalOpen } from "./actions";

export interface ApplicationState {
    startBlockNumber: string,
    endBlockNumber: string,
    rewardsModalOpen: boolean,
};

const initialState: ApplicationState = {
    startBlockNumber: "",
    endBlockNumber: "",
    rewardsModalOpen: false,
};

export default createReducer(initialState, builder => {
    builder
        .addCase(updateStartBlockNumber, (state, {payload: {blockNumber}}) => {
            state.startBlockNumber = blockNumber ? blockNumber : "";
        })
        .addCase(updateEndBlockNumber, (state, {payload: {blockNumber}}) => {
            state.endBlockNumber = blockNumber ? blockNumber : "";
        })
        .addCase(updateRewardsModalOpen, (state, {payload: {status}}) => {
            state.rewardsModalOpen = status ? true : false;
        })
});
