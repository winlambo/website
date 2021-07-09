import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React from 'react'
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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const { forwardRef, useRef, useImperativeHandle } = React;
const Account= forwardRef((props, ref) => {
    const context = useWeb3React<Web3Provider>()
    const {connector, library, chainId, account, activate, deactivate, active, error } = context

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

    // disconnect connect injected Metamask and walletConnect
    const disconnectAccount = (id: any) => {
         deactivate()
         closeModal();
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className="account-logout">
                <h3>Your Account</h3>
                <div>{account}</div>
                <a className="btn-main btn-black mx-auto mt-3" onClick={disconnectAccount}>Logout</a>
            </div>

        </Modal>
    )
})

export default Account
