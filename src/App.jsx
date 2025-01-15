import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
    <Router>

    <Routes>

    <Route path="/login" element={<> <Login/></>} />

    <Route path="/frontend-1/checkout" element={<> <Header/> <Checkout/> </>} />
   
    <Route path="/frontend-1" element={<><Header/> <Home /> </>} />

    <Route path="/frontend-1/:products" element={<><Header/> <ProductList /> </>} />

    <Route path="/frontend-1/products/:productIds" element={<><Header/> <ProductDetails /> </>} />

        

    </Routes>

    </Router>

    </div>
  );
}

export default App;
