/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import hpJson from 'jsons/v2.json';
import Header from './components/Header';
import Footer from './components/Footer';
import TileSection from './components/TileSection';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
    	<section>
	      <Header options={hpJson.headerOptions} />
	      <TileSection products={hpJson.categories} />
	      <Footer options={hpJson.footerOptions} />
	    </section>
    );
  }
}