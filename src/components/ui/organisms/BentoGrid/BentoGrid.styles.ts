import styled from 'styled-components';

export const BentoGridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-columns: 200px;
  grid-auto-rows: 200px;
  grid-template-areas:
    'box-1 box-2 box-2 box-3'
    'box-1 box-4 box-5 box-5';
  height: 100%;
  width: 100%;

  @media (max-width: 58rem) {
    grid-template-areas:
      'box-1 box-1 box-2'
      'box-1 box-1 box-3'
      'box-4 box-5 box-5';
  }

  @media (max-width: 45rem) {
    grid-template-areas:
      'box-1 box-2'
      'box-3 box-2'
      'box-3 box-4'
      'box-5 box-4';
  }
`;

export const BentoGridItem = styled.div<{ gridArea: string }>`
  background: var(--color-accent);
  grid-area: ${(props) => props.gridArea};
`;
