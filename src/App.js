import BtcPrice from './components/BtcPrice'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import btcPriceApp from './actions/refreshPrice';
import './styles/App.css'

const store = createStore(btcPriceApp);

function App() {

  return (
    <div className="App">
       <Provider store={store}>
        <BtcPrice/>
      </Provider>
    </div>
  );
}

export default App;
