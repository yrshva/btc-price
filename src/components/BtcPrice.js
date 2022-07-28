import React, {useState, useEffect} from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { refreshPrice } from "../actions/refreshPrice";
import { useDispatch, useSelector } from 'react-redux';
import '../styles/btcprice.css'


export default function BtcPrice () {
    const override = {
        display: "block",
        margin: "auto",
        textAlign: "center"
    };
    const btcprice = useSelector(state => state.btcprice);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [seconds, setSeconds] = useState(10);
    const [timerActive, setTimerActive ] = useState(true);

    function getPrice(){
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) => res.json())
        .then((response) => {
        dispatch(refreshPrice(response))
        })
    }
    useEffect(()=> {
        if(btcprice!=''){
            setLoaded(true);
        }else {
            getPrice();
        }
    }, [btcprice]);
    
    useEffect(() => {
        if (seconds > 0) {
            setTimerActive(true);
            setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setTimerActive(false);
          }
        },[seconds]);
    
    if(loaded) {
        return <div className="wrap">
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col text-center">
                    <p className="text-light">BTC/USD {btcprice.gbp}</p>
                    <p className="text-light">BTC/EUR {btcprice.eur}</p>
                    <p className="text-light">BTC/GBP {btcprice.usd}</p>
                </div>
                <div className="text-center text-light">{seconds}</div>
                <button className="btn btn-secondary col btn-size" disabled={timerActive} onClick={()=>{setSeconds(10);getPrice()}}>Refresh price</button>

                </div> 
            </div>
        </div>
    } else return <BeatLoader color={"grey"} loading={true} cssOverride={override} size={15} />
}