import { useStore } from 'react-redux';
import { combineReducers } from 'redux';

const REFRESH_PRICE = 'REFRESH_PRICE';

export function refreshPrice(btcprice) {
    return {
      type: REFRESH_PRICE,
      btcprice
    }
  }

const defaultPrice = '';
function btcprice(state=defaultPrice, action){
    if(action.type == REFRESH_PRICE) {
          return {
              gbp: action.btcprice.bpi.GBP.rate,
              usd: action.btcprice.bpi.USD.rate,
              eur: action.btcprice.bpi.EUR.rate
            };
        } else return state;
}



const btcPriceApp = combineReducers({
    btcprice
  });
  
  export default btcPriceApp;