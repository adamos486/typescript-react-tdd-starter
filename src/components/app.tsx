import * as React from "react";
import styled from 'styled-components';

export interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 38px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  align-items: center;
`;

const App: React.FC = (props: Props) => {
  return (
    <Container>
      Hello, there!
      <img src="https://i.imgur.com/NA9Cn1Q.jpg" />
    </Container>
  );
};

export default App;