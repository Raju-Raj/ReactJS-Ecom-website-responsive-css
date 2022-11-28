import './App.css';
import MenuNavbar from './DesktopNavbar/MenuNavbar/MenuNavbar';
import Navbar from './DesktopNavbar/Navbar/Navbar';
import Footer from './Footer/Footer';
import MobNavbar from './MobileNavbar/MobNavbar/MobNavbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>

      <div className='desktop-nav'>
        <Navbar/>
        <MenuNavbar/>
      </div>
      <div className='mobile-nav'>
        <MobNavbar/>
      </div>

      <Home/>

      <Footer/>

    </div>
  );
}

export default App;
