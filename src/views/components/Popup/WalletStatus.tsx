import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { Ref } from 'react'
import Modal from 'react-modal';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state';
import { updateRewardsModalOpen } from '../../../state/application/actions';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "700px",
        background: 'transparent'
    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const { forwardRef, useRef, useImperativeHandle } = React;
const WalletStatus= forwardRef((props, ref) => {
    const context = useWeb3React<Web3Provider>();
    const dispatch = useDispatch();
    const {connector, library, chainId, account, activate, deactivate, active, error } = context;
    const modalStatus = useSelector<AppState, AppState['application']['rewardsModalOpen']>((state) => state.application.rewardsModalOpen);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        },
        closeModal: () => {
            setIsOpen(false)
        }
    }));
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openRewardsModal() {
        dispatch(updateRewardsModalOpen({status: true}));
        closeModal();
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
        >
            <div className="account-logout">
                {account ? 
                    <>
                        <h3>Your Rewards</h3>
                        <div>{account}</div>
                        <a className="btn-main btn-black mx-auto mt-3" onClick={openRewardsModal}>Claim Rewards</a>
                    </> : 
                    <>
                        <h3>Wallet Not Connected</h3>
                        <div>Please connect your wallet to see your rewards.</div>
                        <a className="btn-main btn-black mx-auto mt-3" onClick={closeModal}>Close</a>
                    </>
                }
                
            </div>

        </Modal>
    )
})

export default WalletStatus
