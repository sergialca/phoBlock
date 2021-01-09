import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import { ToastsStore } from "react-toasts";
import "./connectButton.scss";

const ConnectButton = () => {
    const { user, setUser } = useContext(UserContext);
    const onConnect = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const account = accounts[0];
            setUser(() => ({
                ...user,
                wallet: account,
            }));
        } else {
            ToastsStore.warning("Wallet not detected");
        }
    };
    return (
        <button className="connect-btn" onClick={() => onConnect()}>
            Connect
        </button>
    );
};

export default ConnectButton;
