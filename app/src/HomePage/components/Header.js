/**
 * Header
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default function Header({options}) {
  return (
  	<div>
	    <h1>
	      Booked up!
	    </h1>
	    <ul>
	    	{options.map((option) => 
	    		<li key={option.label}>
	    			<a href={option.url}>{option.label}</a>
	    		</li>)}
	    </ul>
	  </div>
  );
}
