import React, {useState, useEffect, CSSProperties} from "react";
import BeatLoader from "react-spinners/BeatLoader";

import "./styles/btcprice.css"

export default function BtcPrice () {
    const override: CSSProperties = {
        display: "block",
        margin: "auto",
        textAlign: "center"
      };
    let [BtcPrice, setBtcPrice] = useState();
    let [loaded, setLoaded] = useState(false);
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) => res.json())
    .then((response) => {
      setBtcPrice(response);
    })
    useEffect(()=> {
        if(BtcPrice!=null){
            setLoaded(true);
            console.log(BtcPrice.bpi)
        }
    }, [BtcPrice])
    if(loaded) {
        return <div className="container">
            <div className="row">
            <div><p>BTC/USD {BtcPrice.bpi.USD.rate}</p></div>
            <div><p>BTC/EUR {BtcPrice.bpi.EUR.rate}</p></div>
            <div><p>BTC/GBP {BtcPrice.bpi.GBP.rate}</p></div>
            </div> 
        </div>;
    } else return <BeatLoader color={"grey"} loading={true} cssOverride={override} size={15} />
}