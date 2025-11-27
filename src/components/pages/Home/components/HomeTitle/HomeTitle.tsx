import type { HomeTitleProps } from './types';
import {
  HomeTitleHeading,
  HomeTitleSubheading,
  HomeTitleWrapper,
} from './HomeTitle.styles';

export const HomeTitle = ({}: HomeTitleProps) => {
  return (
    <HomeTitleWrapper>
      <HomeTitleSubheading>Frontend developer</HomeTitleSubheading>
      <HomeTitleHeading>J-LYTN</HomeTitleHeading>
    </HomeTitleWrapper>
  );
};
