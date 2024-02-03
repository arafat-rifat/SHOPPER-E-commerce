import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopChategory from './pages/ShopChategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/mens' element={<ShopChategory category="men"/>}/>
       <Route path='/womens' element={<ShopChategory category="women"/>}/>
       <Route path='/kids' element={<ShopChategory category="kid"/>}/>
       <Route path='/product' element={<product/>}>
        <Route path=':productId' element={<Product/>}/>
       </Route>
      
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
