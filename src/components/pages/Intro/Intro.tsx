import type { IntroProps } from './types';
import { BentoGrid } from '../../ui';
import { gridItems } from './gridItems';
import { IntroWrapper } from './Intro.styles';

export const Intro = ({}: IntroProps) => {
  return (
    <IntroWrapper>
      <BentoGrid gridItems={gridItems} />
    </IntroWrapper>
  );
};
