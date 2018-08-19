/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/Common/Header';
import HomePage from 'src/HomePage';
import CategoryPage from 'src/CategoryPage';
import UnderConstruction from 'src/UnderConstruction';
import NotFoundPage from 'src/NotFoundPage/Loadable';
import Footer from 'src/Common/Footer';
import 'assets/css/bootstrap.min.css';
import 'assets/css/bootstrap-theme.min.css';
import 'assets/css/main.css';
import 'assets/css/util.css';

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/uc" component={UnderConstruction} />
        <Route exact path="/:subComponent" component={CategoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}
