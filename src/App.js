import React, { Component } from 'react';
import './App.css';

import { Helmet } from "react-helmet";

import "./assets/css/styles.css"

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <script src=
            "https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"
            type="text/javascript" />


          <script src=
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

          <script src=
            "./assets/js/script.js" />

        </Helmet>
        <Header />

        <Body />
        <Footer />
      </div>
    );
  }
}
export default App;