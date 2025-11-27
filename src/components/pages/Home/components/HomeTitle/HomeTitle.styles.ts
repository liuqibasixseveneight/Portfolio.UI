import styled from 'styled-components';

export const HomeTitleWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  padding: 2rem;
  width: 100%;
`;

export const HomeTitleSubheading = styled.div`
  letter-spacing: 2rem;
  text-transform: uppercase;
`;

export const HomeTitleHeading = styled.h1`
  color: var(--color-text);
  font-size: clamp(4rem, 20vw, 20rem);
  font-weight: 700;
  letter-spacing: clamp(0.2rem, 0.8vw, 0.8rem);
  max-width: 100%;
  text-transform: uppercase;
  white-space: nowrap;
`;
