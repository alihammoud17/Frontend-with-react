import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent  from './components/MainComponent';

const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainComponent />
        </div>
      </BrowserRouter>
    </Provider>  
    
    
  );
}

export default App;
