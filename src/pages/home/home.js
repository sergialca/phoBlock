import React from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import DownloadImage from "../../components/downloadImage/downloadImage";
import "./home.scss";

const home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            {/*Get images from a server */}
            <section className="img-wrapper">
                <DownloadImage
                    url="https://images.wallpaperscraft.com/image/sunset_sky_clouds_121865_1080x1920.jpg"
                    orientation="portrait"
                    alt="sunset"
                />
                <DownloadImage
                    url="https://www.redskycreative.co.uk/wp-content/uploads/2018/07/Red-Sky-Creative-Design-Print-Faringdon.jpg"
                    orientation="horizontal"
                    alt="red sky"
                />
                <DownloadImage
                    url="https://cdn.techjuice.pk/wp-content/uploads/2017/09/shorthandmalaysiahowtobuy-mr.jpg"
                    orientation="horizontal"
                    alt="Malysia"
                />
                <DownloadImage
                    url="https://hostelgeeks.com/wp-content/uploads/2018/08/best-hostels-seoul-korea.jpg"
                    orientation="horizontal"
                    alt="Seoul"
                />
                <DownloadImage
                    url="http://unaideaunviaje.com/wp-content/uploads/2016/09/barcelona-40-cosas-ver-hacer-recomendadas-locales-unaideaunviaje-04.jpg"
                    orientation="horizontal"
                    alt="Barcelona"
                />
            </section>
        </div>
    );
};

export default home;
