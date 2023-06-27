import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/navbar/Navbar';
import Mainnavbar from './Components/mainnav/Mainnavbar';
import Carousel from './Components/car/Carousel';
import Homepage from './pages/Home/Homepage';
import Smallpart from './Components/smallpart/Smallpart';
import Footer from './Components/footer/Footer';
import Men from './pages/User/Men';
import Mencomponents from './Components/men/Mencomponents';
import Mendress from './Components/mendress/Mendress';
import Women from './pages/User/Women';
import Womendress from './Components/womendress/Womendress';
import Baby from './pages/User/Baby';
import Babydress from './Components/babydress/Babydress';
import Eletronics from './pages/User/Eletronics';
import Devices from './Components/eletronics/Devices';
import Beauty from './pages/User/Beauty';
import Grossery from './pages/User/Grossery';
import Homeappliences from './pages/User/Homeappliences';
import Homeproducts from './Components/homeappliences/Homeproducts';
import Books from './pages/User/Books';
import Bookitems from './Components/bookitems/Bookitems';
import Decorate from './pages/User/Decorate';
import Foods from './pages/User/Foods';
import Fooditems from './Components/food/Fooditems';
import Toys from './pages/User/Toys';
import Toy from './Components/Toy/Toy';
import Sparetools from './pages/User/Sparetools';
import Spareparts from './Components/sparetools/Spareparts';
import Beautyitems from './pages/User/Beautyitems';
import Beautyiemslists from './Components/beautyitemlists/Beautyiemslists';
import Facemakup from './pages/User/Facemakup';
import Facemakeupproducts from './Components/facemakeupproducts/Facemakeupproducts';
import Addproducts from './Components/addproducts/Addproducts';
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login';
import Aboutus from './Components/aboutus/Aboutus';
import Admin from './pages/Admin/Admin';
import Cartcomponent from './Components/cartcomponent/Cartcomponent';
import Cartpage from './pages/User/Cartpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/> }/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/mainnav' element={<Mainnavbar/> }/>
      <Route path='/carousel' element={<Carousel/> }/>
      <Route path='/smallpart' element={<Smallpart/> }/>
      <Route path='/footer' element={<Footer/> }/>
      <Route path='/men' element={<Men/> }/>
      <Route path='/homepage' element={<Homepage/> }/>
      <Route path='/mencomponent' element={<Mencomponents/> }/>
      <Route path='/mendress' element={<Mendress/> }/>
      <Route path='/women' element={<Women/> }/>
      <Route path='/womendress' element={<Womendress/> }/>
      <Route path='/baby' element={<Baby/> }/>
      <Route path='/babydress' element={<Babydress/> }/>
      <Route path='/eletronics' element={<Eletronics/> }/>
      <Route path='/devices' element={<Devices/> }/>
      <Route path='/beauty' element={<Beauty/> }/>
      <Route path='/grossery' element={<Grossery/> }/>
      <Route path='/homeappliences' element={<Homeappliences/> }/>
      <Route path='/homeappliencesproducts' element={<Homeproducts/> }/>
      <Route path='/book' element={<Books/> }/>
      <Route path='/bookitems' element={<Bookitems/> }/>
      <Route path='/decorate' element={<Decorate/> }/>
      <Route path='/food' element={<Foods/> }/>
      <Route path='/fooditems' element={<Fooditems/> }/>
      <Route path='/toys' element={<Toys/> }/>
      <Route path='/toy' element={<Toy/> }/>
      <Route path='/Sparetools' element={<Sparetools/> }/>
      <Route path='/Spareparts' element={<Spareparts/> }/>
      <Route path='/beautyitems' element={<Beautyitems/> }/>
      <Route path='/beautyitemslists' element={<Beautyiemslists/> }/>
      <Route path='/facemakeup' element={<Facemakup/> }/>
      <Route path='/facemakeupproducts' element={<Facemakeupproducts/> }/>
      <Route path='/addproducts' element={<Addproducts/> }/>
      <Route path='/signup' element={<Signup/> }/>
      <Route path='/login' element={<Login/> }/>
      <Route path='/aboutus' element={<Aboutus/> }/>
      <Route path='/admin' element={<Admin/> }/>
      <Route path='/cart' element={<Cartcomponent/> }/>
      <Route path='/viewcart' element={<Cartpage/> }/>


      
    










  

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
