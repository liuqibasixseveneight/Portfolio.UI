import { BentoGridItem } from '../../molecules';
import type { BentoGridProps } from './types';
import { BentoGridWrapper } from './BentoGrid.styles';

export const BentoGrid = ({ gridItems }: BentoGridProps) => {
  return (
    <BentoGridWrapper>
      {gridItems?.map((item, index) => (
        <BentoGridItem key={`${item?.name}-${index}`} {...item}>
          {item?.content}
        </BentoGridItem>
      ))}
    </BentoGridWrapper>
  );
};
