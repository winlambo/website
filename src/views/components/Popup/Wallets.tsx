import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React from 'react'
import Modal from 'react-modal';
import { injectedConnector, walletConnector, resetWalletConnector } from '../../../utils/connectors';


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

const wallets = [
    {
        'name': 'MetaMask',
        'icon': 'images/mt.svg',
        'id': 'mt'
    },
    {
        'name': 'WalletConnect',
        'icon': 'images/walletconnect.svg',
        'id': 'wc'
    },
    {
        'name': 'TrustWallet',
        'icon': 'images/trustwallet.svg',
        'id': 'tw'
    }
];

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const { forwardRef, useRef, useImperativeHandle } = React;
const Wallets= forwardRef((props, ref) => {
    const context = useWeb3React<Web3Provider>()
    const {connector, library, chainId, account, activate, deactivate, active, error } = context

    const [modalIsOpen, setIsOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        },
        closeModal: () => {
            setIsOpen(false);
        }
    }));
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    // connect injected Metamask and walletConnect
    const connectAccount = (id: any) => {
        if (id == 'mt') { activate(injectedConnector); }
        if (id == 'wc') { resetWalletConnector(walletConnector); activate(walletConnector); }
        if (id == 'tw') { activate(injectedConnector); }
        console.log(id)
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
            <div className="wallet-modal">
                <h4>Connect to a wallet</h4>
                <div className="wallet-body">
                    {wallets.map((wallet, index) => {
                        return (
                            <div className="wallet-wrapper text-center" key={index} onClick={() => connectAccount(wallet.id)}>
                                <div className="wallet-logo">
                                    <img src={wallet.icon} className="meta" />
                                </div>
                                <div className="wallet-name">{wallet.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Modal>
    )
})

export default Wallets
