/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { LoadContext } from 'libs/context';
import styled from 'styled-components';
import Test from './Test';
import spinner from '../assets/Spinner-1s-200px.svg';
// const TestPage = React.lazy(() => import('./Test'));

export default function TestLayout(props: any) {
  const { componentLoadingState } = React.useContext(LoadContext);

  React.useEffect(() => {
    console.log(
      'loadingState from test layout: ',
      componentLoadingState.reportData,
    );
  }, [componentLoadingState.reportData]);
  return (
    // <React.Suspense fallback={<h1>Loading...</h1>}>
    //   <TestPage />
    // </React.Suspense>
    <TestContainer>
      <Test foo={props.fooState} setFoo={props.setFoo} />
      <Div
        id="foo"
        loadingState={componentLoadingState.reportData as boolean}
        // loadingState={props.foo.reportData as boolean}
      >
        <img src={spinner} alt="spinner" />
      </Div>
    </TestContainer>
  );
}

const TestContainer = styled.article`
  margin-bottom: 50px;
  width: 80%;
  height: 100%;
  position: relative;
  z-index: 0;
`;
const Div = styled.div<{ loadingState: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 50%;
  display: ${(props) => (props.loadingState ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;
