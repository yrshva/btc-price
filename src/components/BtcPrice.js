import React, {useState, useEffect} from "react";
import { Reducer, useDispatch } from "redux";
import BeatLoader from "react-spinners/BeatLoader";

import "./styles/btcprice.css"

export default function BtcPrice () {
    const override = {
        display: "block",
        margin: "auto",
        textAlign: "center"
      };
      const {createStore} = Redux;
      const initState = null;
      function reducer(state = initState,action){

      }
      const store = createStore(reducer);
      const todoAction = { type: "ADD_TODO", todo: "" }
      store.dispatch(todoAction);

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
            <button className="btn btn-secondary"></button>
        </div>;
    } else return <BeatLoader color={"grey"} loading={true} cssOverride={override} size={15} />
}