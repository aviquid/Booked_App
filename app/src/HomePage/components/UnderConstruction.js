/**
 * UnderConstruction
 */

import React from 'react';
import UnderConstructionImage from 'assets/images/under-construction.jpg';
import styled from 'styled-components';

const OuterDiv = styled.div`
  position: relative;
  height: 500px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  margin: auto;
  max-height: 100%;
`;

const Message = styled.span`
  position: absolute;
  transform: translate(-50%, 0);
  top: 100%;
  left: 50%;
`;
/* eslint-disable react/prefer-stateless-function */
export default function UnderConstruction(props) {
  return (
    <OuterDiv>
      <Image
        alt="The site is under construction"
        src={UnderConstructionImage}
      />
      <Message>The site's not a mess. It's under construction.</Message>
    </OuterDiv>
  );
}
