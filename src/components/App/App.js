import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Main from '../Main/Main';
import About from '../About/About';
import Countries from '../Countries/Countries';
import Compare from '../Compare/Compare';
import Features from '../Features/Features';
import Quote from '../Quote/Quote';
import Steps from '../Steps/Steps';
import Footer from '../Footer/Footer';

import { appoinment, comfort, cta, masthead, quote1, quote2, steps } from '../../utils/constants';

const App = () => (
  <div className="app">
    <div className="app__container">
      <Header />
      <Main>
        <Promo data={masthead} />
        <About />
        <Countries />
        <Compare />
        <Features data={comfort} withBg />
        <Quote data={quote1} />
        <Features data={appoinment} />
        <Quote data={quote2} />
        <Steps data={steps} />
        <Promo data={cta} withBg />
        <Footer />
      </Main>
    </div>
  </div>
);

export default App;
