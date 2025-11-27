import type { BentoGridItemProps } from './types';
import { BentoGridItemWrapper } from './BentoGridItem.styles';

export const BentoGridItem = ({ gridArea, children }: BentoGridItemProps) => {
  return (
    <BentoGridItemWrapper gridArea={gridArea}>{children}</BentoGridItemWrapper>
  );
};
