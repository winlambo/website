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
const Lose= forwardRef((props, ref) => {
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
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className="lossmodal">
                <h1>Better Luck Next Time!</h1>
                <div className="infoouter">
                Thank you for playing! There's an ongoing Twitter contest for 1000 WINLAMBO tokens to 50 lucky winners! To enter, you must help us find the winner of the Lambo by sharing on Twitter! You can see a suggested tweet on the next screen!
                </div>
                <a className="btn-main btn-white mx-auto mt-3" onClick={closeModal}>Close</a>
            </div>
        </Modal>
    )
})

export default Lose
