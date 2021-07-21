import React, { useRef, useEffect } from 'react'
import Rewards from './Popup/Rewards';
import { useDispatch, useSelector } from 'react-redux';
import { RewardsBtn } from './Styled';
import { AppState } from '../../state';
import { updateRewardsModalOpen } from '../../state/application/actions';

const RewardsButton: React.FC = () => {
    const rewardsRef = useRef(null);
    const dispatch = useDispatch();
    // open rewards modal
    function rewardsModal() {
        dispatch(updateRewardsModalOpen({status: true}));
    }

    function closeModal() {
        dispatch(updateRewardsModalOpen({status: false}));
    }
    const modalStatus = useSelector<AppState, AppState['application']['rewardsModalOpen']>((state) => state.application.rewardsModalOpen);

    return (
        <>
        {modalStatus ? <RewardsBtn onClick={closeModal} src="/images/claim_close.webp" /> :<RewardsBtn onClick={rewardsModal} src="/images/rewards.png"/>}
        </>
    );
}


export default RewardsButton;
