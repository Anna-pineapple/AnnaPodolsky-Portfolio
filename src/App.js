import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer';
import NavMenu from './component/NavMenu';
import Home from './pages/Home';
import ScrollToTop from './component/ScrollToTop';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SmoothScrollbar from './component/SmoothScrollbar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
