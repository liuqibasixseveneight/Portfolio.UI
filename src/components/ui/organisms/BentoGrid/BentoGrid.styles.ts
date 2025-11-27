import styled from 'styled-components';

export const BentoGridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas:
    'box-1 box-2 box-2 box-3'
    'box-1 box-4 box-5 box-5';
  grid-template-columns: repeat(4, minmax(clamp(250px, 25vw, 1fr), 1fr));
  grid-template-rows: repeat(2, minmax(clamp(300px, 40vh, 1fr), 1fr));
  height: 100%;
  width: 100%;

  @media (max-width: 1500px) {
    grid-template-areas:
      'box-1 box-1 box-2'
      'box-1 box-1 box-3'
      'box-4 box-5 box-5';
    grid-template-columns: repeat(3, minmax(clamp(200px, 30vw, 1fr), 1fr));
    grid-template-rows: repeat(3, minmax(clamp(250px, 30vh, 1fr), 1fr));
  }

  @media (max-width: 1000px) {
    grid-template-areas:
      'box-1 box-2'
      'box-3 box-2'
      'box-3 box-4'
      'box-5 box-4';
    grid-template-columns: repeat(2, minmax(clamp(150px, 45vw, 1fr), 1fr));
    grid-template-rows: repeat(4, minmax(clamp(200px, 20vh, 1fr), 1fr));
  }
`;
