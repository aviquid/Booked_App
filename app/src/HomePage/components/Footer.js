/**
 * Footer
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default function Footer({options}) {
  return (
  	<div>
	  	<h2>Footer!</h2>
	  	<ul>
		    {options.categories.map((option, index) => 
		    	!option.hasOptions ?
		    	<li key={option.mainLabel}>
		    		<h3>{option.mainLabel}</h3>
		    		<p>{option.content}</p>
		    	</li> : 
		    	<li key={option.mainLabel}>
		    		<h3>{option.mainLabel}</h3>
		    		<ul>
		    			{option.options.map((opt, index) => 
		    				<li key={opt.label}>
		    					<a href={opt.url}>{opt.label}</a>
		    				</li>)}
		    		</ul>
		    	</li>)}
	  	</ul>
	  </div>
  );
}
