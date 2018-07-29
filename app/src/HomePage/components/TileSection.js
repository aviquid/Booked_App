/*
 * TileSection
 */

import React from 'react';
import { FlexDiv } from 'src/Common/StyledComponents';
import styled from 'styled-components';

const OuterDiv = styled.div`
	margin: 40px 20px 20px;
`;

const ProductDiv = styled.div`
	border: 1px solid #ccc;
	margin: 20px;
	padding: 15px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class TileSection extends React.PureComponent {
  render() {
  	const { products } = this.props; 
    return (
    	<OuterDiv>
	      {products.map((product, index) => 
	      	<section key={product.category} >
	      		<h2>{product.category}</h2>
	      		<FlexDiv>
	      			{product.products.map((prod) =>
	      			<ProductDiv key={prod.productId}>
	      				<p>{prod.offerMsg}</p>
	      				<p>{prod.name}</p>
	      				<p>Rs.{prod.discountedPrice}</p>
	      			</ProductDiv>)}
	      		</FlexDiv>
	      	</section>)}
	    </OuterDiv>
    );
  }
}
