import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import DownloadImage from "../../components/downloadImage/downloadImage";
import { getImages } from "../../api/api";
import toBuffer from "it-to-buffer";
import IpfsApi from "ipfs-http-client";
import Web3 from "web3";
import "./home.scss";

const Home = () => {
    const [url, setUrl] = useState("");
    const ipfs = IpfsApi({
        host: "ipfs.infura.io",
        port: "5001",
        protocol: "https",
    });
    const smartContractAdress = "0x00";
    const web3 = new Web3("https://goerli.infura.io/v3/2f9903cb5e0c4b20884015df6a4295ef");
    const web3Infura = new Web3(
        Web3.givenProvider || "https://goerli.infura.io/v3/2f9903cb5e0c4b20884015df6a4295ef"
    );

    const phoContract = new web3.eth.Contract("abi", smartContractAdress);

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
