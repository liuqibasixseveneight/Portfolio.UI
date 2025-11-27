import styled from 'styled-components';

export const AppWrapper = styled.div`
  background-color: var(--color-background);
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: 80px 1fr 400px;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
`;

export const ContentWrapper = styled.main`
  display: grid;
  grid-area: content;
  grid-template-areas:
    'home'
    'intro'
    'about'
    'projects'
    'contact';
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  place-content: center;
  width: 100%;
`;
