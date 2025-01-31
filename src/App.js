import './App.css';
import { useState } from 'react';
import{Provider} from "react-redux";
import store from "./store";
import { useHistory } from "react-router-dom"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Cart from './components/Cart';
import Details from './components/Details';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/login/login';
import Register from './components/register/register';


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <Router>
      <Provider store={store}>

     <Nav/>
     <Route path="/" exact>
      <Home user={user} setLoginUser={setLoginUser}/>
     </Route>
     <Route path="/cart" exact component={Cart}/>
     <Route path="/about" exact component={About}/>
     <Route path="/contact" exact component={Contact}/>
     <Route path="/details/:id" exact component={Details}/>
     <Route path="/login" exact>
              <Login setLoginUser={setLoginUser}/>
      </Route>
     <Route path="/register" exact component={Register}/>
     <Footer/>
     {/* <Googlepay/> */}
     </Provider>

     </Router>

  );
}

export default App;
