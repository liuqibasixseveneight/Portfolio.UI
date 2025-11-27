import styled from 'styled-components';

export const BentoGridItemWrapper = styled.div<{ gridArea: string }>`
  background: var(--color-accent);
  grid-area: ${(props) => props.gridArea};
`;

