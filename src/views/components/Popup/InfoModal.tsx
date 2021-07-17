import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { Ref } from 'react'
import Modal from 'react-modal';
import { injectedConnector, walletConnector, truewalletConnector } from '../../../utils/connectors';
import styled from 'styled-components';
import { InfoIcon } from '../Styled';

const Ptag = styled.p`
    color: white;
    line-height: 1.3;
    font-weight: 600;
`;

const WrapperInfo = styled.div`
    font-size: 18px;
    overflow-x: visible;
    overflow-y: auto;
    max-height: 600px;
    word-break: break-word;
    box-sizing: content-box;
    margin-top: 10px;
    box-shadow: 0px 0px 47px -1px rgb(255 255 255 / 21%);
    padding: 15px;
`;

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

type IRef = {
    openModal: () => void,
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const { forwardRef, useImperativeHandle } = React;
const InfoModal= forwardRef((props: {content: string}, ref: Ref<IRef>) => {
    const {content} = props;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        }
    }));
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    let contentElement = undefined;
    if (content == 'top-100') {
        contentElement = <>
        <h3>Top 100 Active Traders</h3>
            <WrapperInfo>
            <Ptag>TODAY'S TOP 100 ACTIVE TRADERS section shows the players that have bought/sold/transferred the most WINLAMBO in the current day.</Ptag>
            <Ptag>Every day, these 100 players have a chance to win the daily prizes!<br/>
            The prizes can be seen below in "The Daily Draw" section of the website!</Ptag>
            <Ptag>To make it into TODAY'S TOP 100 ACTIVE TRADERS list, you just have to buy, sell, or transfer WINLAMBO.</Ptag>
            <Ptag>
            Position #1 is guaranteed the top prize in The Daily Draw!<br/>
            Position #2 is guaranteed the 2nd prize in The Daily Draw!<br/>
            Position #3 is guaranteed the 3rd prize in The Daily Draw!<br/>
            Positions #4 - #100 are all eligible to win the remaining 14 prizes in The Daily Draw, however they are not guaranteed a win.
            </Ptag>
            

            See the info  <InfoIcon className="fas fa-info-circle" style={{paddingRight: 10, cursor: 'auto'}}></InfoIcon> tooltip in The Daily Draw section for more information!
        </WrapperInfo>
        </>
    } else if (content == 'daily-draw') {
        contentElement = 
        <>
            <h3>The Daily Draw</h3>
            <WrapperInfo>
            <Ptag>The Daily Draw is a distribution of prizes EVERY DAY to the top 100 Winlambo players of the previous day!</Ptag>

            <Ptag>The Daily Draw happens at 16:00 UTC of every day.<br/>
            To see the players that qualify for tomorrow's prizes, take a look at "TODAY'S TOP 100 ACTIVE TRADERS" section above!</Ptag>
            <Ptag>
            The total prizes distributed are equal to 5% of the BUSD in the Daily Jackpot Fund.<br/>
            That means, every day, 5% of the BUSD in this <a href="https://bscscan.com/address/0xb61ed72a55ff87a2b731e8d247555c1ee499a56a" target="_blank" style={{border: 'none'}}>wallet</a> is distributed to Winlambo players!
            </Ptag>
            <Ptag>
            For example, if the wallet above has 2000 BUSD in it, then the total prizes for the day equal 100 BUSD.<br/>
            The prizes are distributed as follows--
            </Ptag>
            <Ptag>
            3 Guaranteed Prizes<br/>
            1st Place - 15% of the total prizes, e.g. 15 BUSD.<br/>
            2nd Place - 10% of the total prizes, e.g. 10 BUSD.<br/>
            3rd Place - 5% of the total prizes, e.g. 5 BUSD.
            </Ptag>
            <Ptag>
            14 Lucky Prizes<br/>
            Any of the Top 100 Active Traders of the previous day have a chance to win up to 14 times!<br/>
            Each prize is 5% of the total prizes, e.g. 5 BUSD.
            </Ptag>
            <Ptag>
            The top 100 players are all given tickets according to how much Winlambo they hold compared to the rest of the 100 players.<br/>
            So if Player A holds 1000 Winlambo, and the remaining 99 players hold a total of 1000 Winlambo, then Player A receives 50% of the tickets, and the remaining 99 players receive 50% of the tickets.
            </Ptag>
            <Ptag>A player can win more than once.</Ptag>
            <Ptag>The Lucky Holders Jackpot</Ptag>
            <Ptag>
            The Lucky Holders Jackpot is a total of $100 BUSD given out every day to WINLAMBO HOLDERS!
            Your WINLAMBO tokens are your tickets! All you have to do is hold!
            </Ptag>
            <Ptag>A player can win more than once.</Ptag>
        </WrapperInfo>
        </>
    } else if (content == 'lambo-draw') {
        contentElement = <>
            <h3>Lambo Draw</h3>
            <WrapperInfo>
            <Ptag>The Lambo Draw is the reason WINLAMBO exists!</Ptag>

            <Ptag>Every time the Lambo Fund has 300,000 BUSD in it, 210,000 BUSD is given away to a lucky holder!
            All WINLAMBO holders are eligible to win!</Ptag>

            <Ptag>Here is the story on the most recent winner: <a href="https://bsctimes.com/winlambo-gives-away-its-first-lambo/" target="_blank" style={{border: 'none'}}>https://bsctimes.com/winlambo-gives-away-its-first-lambo</a></Ptag>

            <Ptag>Your tokens are your tickets! Therefore, the more tokens you hold at the time of The Lambo Draw, the more tickets you have, and the higher your chances are of winning!</Ptag>
            <Ptag>
            When you buy or receive WINLAMBO, you get tickets.<br/>
            When you sell or send WINLAMBO, you lose your tickets.
            </Ptag>
            <Ptag>The lowest possible range of Lambo tickets in the system is 100,000,001, and the highest range is 999,999,999.</Ptag>
            <Ptag>Your ticket numbers can be seen by connecting your wallet at the top of this page!</Ptag>
            <Ptag>
            If you are the winner of The Lambo Draw, you MUST NOT buy, sell or transfer WINLAMBO tokens until you have received your winnings.<br/>
            This is because the team needs to verify that you're the winner, and transferring tokens changes your tickets.
            </Ptag>
            <Ptag>
            The winner has 3 days to claim their winnings. To claim, the winner must send 0.0001 BNB to the Lambo Fund so that we know that the winner has access to their wallet. 
            The Lambo Fund can be seen at <a href="https://bscscan.com/address/0x8dA5e332A088779be241C79B8ffe53003E4529A2" target="_blank" style={{border: 'none'}}>https://bscscan.com/address/0x8dA5e332A088779be241C79B8ffe53003E4529A2</a>
            </Ptag>
            <Ptag>Once the winner has claimed their winnings, they will receive 210,000 BEP-20 BUSD from the Lambo Fund.</Ptag>
            <Ptag>
            Pro tip: In order to incorporate the 2% reflection from other people’s transactions into your tickets, send or receive 1 WINLAMBO token to yourself a few minutes before the Jackpot happens!
            </Ptag>
            <Ptag>Best of luck to all our holders during The Lambo Draw!</Ptag>
        </WrapperInfo>
        </>
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
            <div className="info-section">
                {contentElement}
                <div></div>
                <a className="btn-main btn-black mx-auto mt-3" onClick={closeModal}>Close</a>
            </div>

        </Modal>
    )
})

export default InfoModal
