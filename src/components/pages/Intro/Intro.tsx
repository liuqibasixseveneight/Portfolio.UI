import { BentoGrid } from '../../ui';
import { IntroWrapper } from './Intro.styles';
import type { IntroProps } from './types';

export const Intro = ({}: IntroProps) => {
  return (
    <IntroWrapper>
      <div>Intro</div>
      <BentoGrid />
    </IntroWrapper>
  );
};
