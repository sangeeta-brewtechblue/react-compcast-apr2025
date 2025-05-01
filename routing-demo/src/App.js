import logo from './logo.svg';
import './App.css';
//import {Router, Route, IndexRoute} from 'react-router';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {createBrowserHistory} from 'history';
import Home from './home';
import About from './about';
import Contact from './contact';
import Main from './main';

function App() {
  return (
    <Router history={createBrowserHistory}>
     <Routes>
      <Route path='' element={<Main/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>

        </Routes>

    </Router>
  );
}

export default App;
