import React, { useRef, useEffect } from 'react'
import Rewards from './Popup/Rewards';
import { useDispatch, useSelector } from 'react-redux';
import { RewardsBtn } from './Styled';
import { AppState } from '../../state';

const RewardsButton: React.FC = () => {
    const rewardsRef = useRef(null);
    const dispatch = useDispatch();
    // open rewards modal
    function rewardsModal() {
        // @ts-ignore
        rewardsRef.current.openModal();
    }

    function closeModal() {
        // @ts-ignore
        rewardsRef.current.closeModal();
    }
    const modalStatus = useSelector<AppState, AppState['application']['rewardsModalOpen']>((state) => state.application.rewardsModalOpen);

    return (
        <>
        <Rewards ref={rewardsRef} />
        {modalStatus ? <RewardsBtn onClick={closeModal} src="/images/claim_close.webp" /> :<RewardsBtn onClick={rewardsModal} src="/images/rewards.png"/>}
        </>
    );
}


export default RewardsButton;
