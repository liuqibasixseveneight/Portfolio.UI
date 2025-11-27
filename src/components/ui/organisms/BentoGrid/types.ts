import type { ReactNode } from 'react';

export type BentoGridItemData = {
  content?: ReactNode;
  gridArea: string;
  name: string;
};

export type BentoGridProps = {
  gridItems: BentoGridItemData[];
};
