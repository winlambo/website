import { createAction } from "@reduxjs/toolkit";

export const updateStartBlockNumber = createAction<{blockNumber?: string}>('app/updateStartBlockNumber');
export const updateEndBlockNumber = createAction<{blockNumber?: string}>('app/updateEndBlockNumber');
export const updateRewardsModalOpen = createAction<{status?: boolean}>('app/updateRewardsModalOpen');
