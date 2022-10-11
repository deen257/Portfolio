import React from "react";
import NavBar from "./component/Navbar";
import Banner from "./component/Banner";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (<>
  <Router>

  <NavBar />
  <Banner />
  <Skills />
  <Project />
  <Footer />
  </Router>
  </>
  );
}

export default App;
