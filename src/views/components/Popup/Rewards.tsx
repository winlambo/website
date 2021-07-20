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
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        maxWidth: "700px",
        background: 'transparent',
        transform: 'skewX(10deg) translate(-40%, -50%)',
        border: '6px solid #7b7b7b',
        minWidth: '250px',
    }
};
const WrapperModal = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const WrapperCard = styled.div`
    min-width: 250px;
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: skewX(-10deg);
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
    padding: 5px 10px;
    width: 50%;
    border: none;
    outline-color: #dbba5c;
    border-radius: 5px;
    transform: skewX(10deg);
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
    const [userRewards, setUserRewards] = useState([{}]);

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

    useEffect(() => {
        setIsOpen(modalStatus);
    }, [modalStatus]);

    function claimRewards() {
        getClaimRewards(chainId, library).then(async (res) => {
            if (res) {
                getRewardsList(chainId, library)
                    .then(async (res) => {
                        setRewardsList(res);
                        let _rewards = [];
                        for (let id = 0; id < res.length; id ++) {
                            const amount = await getRewardsUser(chainId, account, library, res[id].address); 
                            _rewards.push(amount.toFixed(3));
                        }
                        setUserRewards(_rewards)
                        console.log(_rewards);
                    })
                    .catch((err) => {
                        console.error("Getting Rewards List error", err); 
                        setRewardsList([]);
                    })
            }
        })
    }

    useEffect(() => {
        setInterval(() => {
            if (account && chainId && library) {
                getRewardsList(chainId, library)
                    .then(async (res) => {
                        setRewardsList(res);
                        let _rewards = [];
                        for (let id = 0; id < res.length; id ++) {
                            const amount = await getRewardsUser(chainId, account, library, res[id].address); 
                            _rewards.push(amount.toFixed(3));
                        }
                        setUserRewards(_rewards)
                        console.log(_rewards);
                    })
                    .catch((err) => {
                        console.error("Getting Rewards List error", err); 
                        setRewardsList([]);
                    })
            }
        }, 12000);
    }, [chainId, account]);
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
        >
            <WrapperModal>
                {rewardsList.map((rewards: IReward, index) => {
                    return (
                        <>
                        {index == 0 ? <></> : <Divider />}
                        <WrapperCard>
                            <LogoCoin src={"/images/coins/" + rewards.symbol + ".png"} />
                            <Ptag>Rewards Available</Ptag>
                            <BText>{userRewards[index]}</BText>
                            <BText>${rewards.symbol}</BText>
                            <CBtn onClick={claimRewards} disabled={userRewards[index] == 0}><Ctext>CLAIM</Ctext></CBtn>
                        </WrapperCard>
                        </>
                    );
                })}
            </WrapperModal>

        </Modal>
    )
})

export default Rewards
