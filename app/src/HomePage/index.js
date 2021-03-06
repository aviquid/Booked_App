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
import styled from 'styled-components';
import hpJson from 'jsons/v2.json';
import Search from './components/Search';
import TileSection from './components/TileSection';
import Slider from './components/Slider';

const Section = styled.section`
  margin-top: 72px;
`;
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Section>
        <div className="input-group">
          <Search type="text" className="form-control" placeholder="Search" />
        </div>
        <Slider />
        <TileSection products={hpJson.categories} />
      </Section>
    );
  }
}
