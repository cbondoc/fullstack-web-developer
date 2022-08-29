import React, { Component } from 'react';
import './App.css';

import { Helmet } from "react-helmet";


import Header from './Header';
import Body from './Body';
import Footer from './Footer';



class App extends Component {

  render() {
    return (


      <>
        <Header />
        <Body />
        <Footer />
      </>



    );
  }
}

export default App;


