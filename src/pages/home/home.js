import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts";
import DownloadImage from "../../components/downloadImage/downloadImage";
import { getImages } from "../../api/api";
import toBuffer from "it-to-buffer";
import IpfsApi from "ipfs-http-client";
import Web3 from "web3";
import { phoTokenAbi } from "../../contracts/photoken";
import "./home.scss";

const Home = () => {
    const [url, setUrl] = useState("");
    const ipfs = IpfsApi({
        host: "ipfs.infura.io",
        port: "5001",
        protocol: "https",
    });
    const smartContractAdress = "0x4c3567827e6DE0E354fa91F443331c4A09b3F69E";
    const web3 = new Web3(
        Web3.givenProvider || "https://goerli.infura.io/v3/2f9903cb5e0c4b20884015df6a4295ef"
    );
    //const accounts = await window.ethereum.enable();
    //const account = accounts[0];
    web3.eth.getAccounts(console.log);

    const phoContract = new web3.eth.Contract(phoTokenAbi, smartContractAdress);
    /*const setData = async e => {
        e.preventDefault();
        
        const gas = await HelloContract.methods.setGreeting(greeting).estimateGas();
        const result = await HelloContract.methods
          .setGreeting(greeting)
          .send({ from: account, gas });
        console.log(result);
      };*/
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

    const onDownload = async (hash, cid, wallet) => {
        const { ethereum } = window;
        if (ethereum) {
            if (ethereum.isMetaMask) {
                console.log("Home -> cid", cid);
                console.log("the img hash is -> ", hash);
                console.log("file: home.js ~ line 186 ~ onDownload ~ author", wallet);
                const transfer = await phoContract.methods.mint(wallet).call();
                console.log("🚀 ~ file: home.js ~ line 190 ~ onDownload ~ transfer", transfer);
            } else {
                ToastsStore.warning("Metamask not detected");
            }
        } else {
            ToastsStore.warning("Metamask not detected");
        }
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
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
        </div>
    );
};

export default Home;
