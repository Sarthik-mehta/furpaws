import './App.css';
import{Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Cart from './components/Cart';
import Details from './components/Details';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Provider store={store}>
      
     <Nav/>
     <Route path="/" exact component={Home}/>
     <Route path="/cart" exact component={Cart}/>
     <Route path="/details/:id" exact component={Details}/>
     <Footer/>
     </Provider>
     
     </Router>
     
   
  );
}

export default App;
