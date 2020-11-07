import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import UploadForm from "../../components/uploadForm/uploadForm";
import { UserContext } from "../../context/user";
import "./profile.scss";

const Profile = () => {
    const { user } = useContext(UserContext);
    const [display, setDisplay] = useState({ uploadForm: false });

    const showModal = () => {
        setDisplay(() => ({
            uploadForm: true,
        }));
    };

    const closeModal = () => {
        setDisplay(() => ({
            uploadForm: false,
        }));
    };

    return (
        <div className="profile">
            <UploadForm display={display.uploadForm} onClose={closeModal} />
            <Navbar />
            <button className="upload-btn" onClick={() => showModal()}>
                Upload Images
            </button>
        </div>
    );
};

export default Profile;
