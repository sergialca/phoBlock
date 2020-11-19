import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import DownloadImage from "../../components/downloadImage/downloadImage";
import { getImages } from "../../api/api";
import toBuffer from "it-to-buffer";
import IpfsApi from "ipfs-http-client";
import "./home.scss";

const Home = () => {
    const [url, setUrl] = useState("");
    const ipfs = IpfsApi({
        host: "ipfs.infura.io",
        port: "5001",
        protocol: "https",
    });

    const getHomeImages = async () => {
        const img = await getImages();
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
                        cid: img.send[i].attributes.cid,
                    },
                ]);
            }
        }
    };

    useEffect(() => {
        getHomeImages();
    }, []);

    const onDownload = async (hash, cid) => {
        console.log("Home -> cid", cid);
        console.log("the img hash is -> ", hash);
        //const ct = await toBuffer(ipfs.get(hash));
        //console.log("Home -> ct", ct);
    };

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
                                  author={c.author}
                                  wallet={c.wallet}
                                  cid={c.cid}
                                  onDownload={onDownload}
                              />
                          );
                      })
                    : ""}
            </section>
        </div>
    );
};

export default Home;
