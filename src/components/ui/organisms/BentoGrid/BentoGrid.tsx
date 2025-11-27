import type { BentoGridProps } from './types';
import { BentoGridItem, BentoGridWrapper } from './BentoGrid.styles';

export const BentoGrid = ({}: BentoGridProps) => {
  return (
    <BentoGridWrapper>
      <BentoGridItem gridArea='box-1'>Home</BentoGridItem>
      <BentoGridItem gridArea='box-2'>Intro</BentoGridItem>
      <BentoGridItem gridArea='box-3'>About</BentoGridItem>
      <BentoGridItem gridArea='box-4'>Contracts</BentoGridItem>
      <BentoGridItem gridArea='box-5'>Projects</BentoGridItem>
    </BentoGridWrapper>
  );
};
