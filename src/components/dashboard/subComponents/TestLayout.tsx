/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { LoadContext } from 'libs/context';
import styled from 'styled-components';
import DataTable from './DataTable';
import LineGraph from './LineGraph';
// import Test from './Test';
import spinner from '../assets/Spinner-1s-200px.svg';
// const TestPage = React.lazy(() => import('./Test'));

export default function TestLayout(props: any) {
  const { componentLoadingState } = React.useContext(LoadContext);
  const [childLoadingState, setChildLoadingState] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (componentLoadingState[props.target]) {
      setChildLoadingState(true);
    } else {
      setChildLoadingState(false);
    }
  }, [componentLoadingState]);
  return (
    // <React.Suspense fallback={<h1>Loading...</h1>}>
    //   <TestPage />
    // </React.Suspense>
    <TestContainer>
      {/* <Test target={props.target} /> */}
      <DataTable />
      <LineGraph />
      <Div
        id="foo"
        loadingState={childLoadingState}
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
