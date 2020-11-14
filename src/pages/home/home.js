import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import DownloadImage from "../../components/downloadImage/downloadImage";
import { getImages } from "../../api/api";
import "./home.scss";

const Home = () => {
    const [url, setUrl] = useState("");

    const getHomeImages = async () => {
        const img = await getImages();
        console.log("Home -> img", img.send);
        if (img.ok) {
            for (let i = 0; i < img.send.length; i++) {
                setUrl((prev) => [
                    ...prev,
                    {
                        id: i,
                        hash: img.send[i].attributes.hash,
                        wallet: img.send[i].attributes.wallet,
                        author: img.send[i].attributes.author,
                        orientation: img.send[i].attributes.orientation,
                    },
                ]);
            }
        }
    };
    useEffect(() => {
        getHomeImages();
    }, []);

    return (
        <div>
            <Navbar />
            <Header />
            <section className="img-wrapper">
                {url
                    ? url.map((c) => {
                          return (
                              <DownloadImage
                                  key={c.id}
                                  url={c.hash}
                                  orientation={c.orientation}
                                  author={c.author}
                                  wallet={c.wallet}
                              />
                          );
                      })
                    : ""}
            </section>
        </div>
    );
};

export default Home;
