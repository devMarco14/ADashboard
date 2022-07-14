import React from 'react';
import styled from 'styled-components';

function LandingPage() {
  return <LandingLayout>LandingPage</LandingLayout>;
}

const LandingLayout = styled.div`
  ${({ theme }) => theme.media.xsmall} {
    font-size: 100px;
  }
  background-color: #fcfcfc;
`;

export default LandingPage;
