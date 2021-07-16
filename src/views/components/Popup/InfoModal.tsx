import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { Ref } from 'react'
import Modal from 'react-modal';
import { injectedConnector, walletConnector, truewalletConnector } from '../../../utils/connectors';

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
                <h3>{content}</h3>
                <div></div>
                <a className="btn-main btn-black mx-auto mt-3" onClick={closeModal}>Close</a>
            </div>

        </Modal>
    )
})

export default InfoModal
