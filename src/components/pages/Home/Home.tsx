import type { HomeProps } from './types';
import { HomeWrapper } from './Home.styles';
import { HomeTitle } from './components';

export const Home = ({}: HomeProps) => {
  return (
    <HomeWrapper>
      <HomeTitle />
    </HomeWrapper>
  );
};
