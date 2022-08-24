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

        <i class="bi bi-123"></i>
      </>



    );
  }
}

export default App;


