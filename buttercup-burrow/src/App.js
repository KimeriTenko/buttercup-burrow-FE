import "./App.css";
import {Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Store from "./components/Store";
import Category from "./components/Category";
import Contact from "./components/Contact";
import CartScreen from "./screens/CartScreen";


function App() {

  return (
    <Router>
    <main className='app'>
      <Navbar />
      <Switch>
        <Route path='/home' component={<Home/>} />
        <Route path='/about' component={<About/>} />
        <Route path='/gallery' component={<Gallery/>} />
        <Route path='/store' component={<Store/>} />
        <Route path='/cart' component={<CartScreen/>} />
        <Route path='/category' component={<Category/>} />
        <Route path='/contact' component={<Contact/>} />
      </Switch>
    </main>
    </Router>
  );
}

export default App;