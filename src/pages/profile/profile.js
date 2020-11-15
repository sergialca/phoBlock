import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import UploadForm from "../../components/uploadForm/uploadForm";
import { logout, getImagesByAuthor } from "../../api/api";
import { UserContext } from "../../context/user";
import Identicon from "react-identicons";
import AuthorImage from "../../components/authorImage/authorImage";
import "./profile.scss";

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const [display, setDisplay] = useState({ uploadForm: false });
    const [url, setUrl] = useState("");

    const getAuthorImages = async () => {
        const img = await getImagesByAuthor(user.author);
        if (img.ok) {
            for (let i = 0; i < img.send.length; i++) {
                setUrl((prev) => [...prev, { id: i, hash: img.send[i].attributes.hash }]);
            }
        }
    };
    useEffect(() => {
        getAuthorImages();
    }, []);

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
            <div className="profile-header">
                <div className="profile-img">
                    <Identicon string={user.author} size={100} />
                </div>
                <div className="profile-data">
                    <p className="info">
                        <strong>Name: </strong>
                        {user.author}
                    </p>
                    <p className="info">
                        <strong>Email: </strong>
                        {user.mail}
                    </p>
                    <p className="info">
                        <strong>Wallet: </strong>
                        {user.wallet}
                    </p>
                </div>
                <div className="logout-wrap">
                    <button
                        className="logout"
                        onClick={() => {
                            logout();
                            setUser(() => ({ logged: false }));
                        }}
                    >
                        Log out
                    </button>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button className="upload-btn" onClick={() => showModal()}>
                    Upload Images
                </button>
            </div>
            <div className="profile-main">
                {url
                    ? url.map((c) => {
                          return <AuthorImage key={c.id} link={c.hash} />;
                      })
                    : ""}
            </div>
        </div>
    );
};

export default Profile;
