import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import media from '../Styled/RespondTo';
import { getRewardsList, getRewardsUser, getClaimRewards } from '../../../utils/contracts';
import { updateRewardsModalOpen } from '../../../state/application/actions';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state';

const customStyles = {
    content: {
        top: '10%',
        left: '25%',
        maxWidth: '49%',
        background: 'transparent',
        border: '6px solid #7b7b7b',
    }
};
const WrapperModal = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const WrapperCard = styled.div`
    min-width: 250px;
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    ${media.md`
        padding: 10px 5px;
        min-width: 200px
    `}
    ${media.sm`
        padding: 10px 5px;
        min-width: 200px;
        width: 100%;
    `}
`;

const LogoCoin = styled.img`
    height: 40px;
`

const Ptag = styled.p`
    margin-top: 10px;
    text-transform: uppercase;
    color: white;
    margin-bottom: 8px;
`;

const BText = styled.span`
    color: #ccb26f;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 0px 0px 20px #CCB26F;
    line-height: 1;
`;

const CBtn = styled.button`
    margin-top: 20px;
    background-color: #dbba5c;
    padding: 8px 10px;
    width: 50%;
    border: none;
    outline-color: #dbba5c;
    border-radius: 5px;
`;

const Ctext = styled.span`
    transform: skewX(-10deg);
    color: white;
`;

const Divider = styled.div`
    height: 180px;
    border: 3px solid white;
    align-self: center;
    ${media.sm`
        display: none;
    `}
`;

const WalletAddress = styled.p`
    overflow-wrap: anywhere;
    margin: 0;
    color: rgb(204, 178, 111);
    text-shadow: rgb(204, 178, 111) 0px 0px 20px; 
    font-weight: 500;
    padding: 2%;
`;

interface IReward {
    [key: string]: any
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const { forwardRef, useRef, useImperativeHandle } = React;
const Rewards= forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const context = useWeb3React<Web3Provider>()
    const {connector, library, chainId, account, activate, deactivate, active, error } = context
    const [rewardsList, setRewardsList] = useState([{}]);
    const [userRewards, setUserRewards] = useState([]);

    const modalStatus = useSelector<AppState, AppState['application']['rewardsModalOpen']>((state) => state.application.rewardsModalOpen);

    const [modalIsOpen, setIsOpen] = useState(false);
    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
            dispatch(updateRewardsModalOpen({status: true}));
        },
        closeModal: () => {
            setIsOpen(false);
            dispatch(updateRewardsModalOpen({status: false}));
        }
    }));
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function afterCloseModal() {

    }

    function closeModal() {
        setIsOpen(false);
        dispatch(updateRewardsModalOpen({status: false}));
    }

    function initialize() {
        getRewardsList(chainId, library)
            .then(async (res) => {
                setRewardsList(res);
                let _rewards = [];
                for (let id = 0; id < res.length; id ++) {
                    const amount = await getRewardsUser(chainId, account, library, res[id].address, res[id].decimals);
                    _rewards.push(amount.toFixed(2));
                }
                // @ts-ignore
                setUserRewards(_rewards)
            })
            .catch((err) => {
                console.error("Error getting Rewards List: ", err);
                setRewardsList([]);
            })
    }

    useEffect(() => {
        setIsOpen(modalStatus);
    }, [modalStatus]);

    function claimRewards() {
        getClaimRewards(chainId, library?.getSigner()).then(async (res) => {
            if (res) {
                setUserRewards([]);
            }
        })
    }

    useEffect(() => {
        if (account && chainId && library) {
            initialize();
        }

    }, [account, chainId]);

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
        >
            {account && active && <WrapperModal>
                <h3 style={{width: '100%'}}>Your Rewards</h3>
                <WalletAddress className="text-center" style={{overflowWrap: 'anywhere', margin: 0}}>{account}</WalletAddress>
                {rewardsList.map((rewards: IReward, index) => {
                    return (
                        <>
                        {index == 0 ? <></> : <Divider />}
                        <WrapperCard>
                            <LogoCoin src={"/images/coins/" + rewards.symbol + ".png"} />
                            <Ptag>Rewards Available</Ptag>
                            {userRewards.length > index && userRewards[index] ? <BText>{userRewards[index]}</BText> : <BText>0.00</BText>}
                            <BText>${rewards.symbol}</BText>
                        </WrapperCard>
                        </>
                    );
                })}
                <CBtn onClick={claimRewards}><Ctext>CLAIM</Ctext></CBtn>
                </WrapperModal>}
                {!account && !active &&
                    <div className="account-logout">
                        <h3>Wallet Not Connected</h3>
                        <div>Please connect your wallet to see your rewards.</div>
                        <a className="btn-main btn-black mx-auto mt-3" onClick={closeModal}>Close</a>
                    </div>
                }
        </Modal>
    )
})

export default Rewards
