import React from 'react';
import './App.css';
import styled from 'styled-components';

const canvaSize: number = 200;
const pixelSize: number = 100;

const Container = styled.div`
  width: ${canvaSize}px;
  background: #bbb;
  font-size: 0;
`;

const Pixel = styled.div.attrs((props: {color: string}) => props)`
  width: ${pixelSize}px;
  height: ${pixelSize}px;
  display: inline-block;
  background-color: #${(props) => props.color};
`;

type PixelType = {
  color?: string;
}

function App() {
  const pixels: PixelType[] = [];
  for (let i = 0; i < (canvaSize * canvaSize) / pixelSize; i++) {
    pixels.push({});
  }

  return (
    <Container>
      {pixels.map((pixel: PixelType, index: number) => (
          <Pixel color={Math.floor(Math.random()*16777215).toString(16)}></Pixel>
      ))}
    </Container>
  );
}

export default App;
