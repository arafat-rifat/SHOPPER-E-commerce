import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopChategory from './pages/ShopChategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/mens' element={<ShopChategory banner={men_banner} category="men"/>}/>
       <Route path='/womens' element={<ShopChategory  banner={women_banner} category="women"/>}/>
       <Route path='/kids' element={<ShopChategory  banner={kid_banner} category="kid"/>}/>
       <Route path='/product' element={<product/>}>
        <Route path=':productId' element={<Product/>}/>
       </Route>
      
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
