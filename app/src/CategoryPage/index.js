/*
 * CategoryPage
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class CategoryPage extends React.PureComponent {
  render() {
    const { match : { params : { subComponent } } } = this.props;
    return (
    	<section>
        <p>This is to show dynamic routing.</p>
        <p>Current Route : {subComponent}</p>
	    </section>
    );
  }
}
