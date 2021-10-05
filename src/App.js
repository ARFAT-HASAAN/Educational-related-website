import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/header/Header';

import Notfound from './Components/notfound/Notfound';
import Footer from './Components/footer/Footer';
import Course from './Components/course/Course';
import Home from './Components/Home/Home';
import Banner from './Components/banner/Banner';
import Displyservice from './Components/Displyservice/Displyservice'
import About from './Components/about/About'


function App() {
  return (
    <>
      <Router>
        <Home></Home>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <Displyservice></Displyservice>
          </Route>
          <Route path="/home">
            <Banner></Banner>
            <Displyservice></Displyservice>

          </Route>

          <Route exact path="/course">
            <Course></Course>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>

      </Router>




    </>
  );
}

export default App;
