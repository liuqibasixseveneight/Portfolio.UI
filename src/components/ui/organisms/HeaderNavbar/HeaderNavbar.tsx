import type { HeaderNavbarProps } from './types';
import {
  HeaderNavbarInnerWrapper,
  HeaderNavbarWrapper,
} from './HeaderNavbar.styles';

export const HeaderNavbar = ({}: HeaderNavbarProps) => {
  return (
    <HeaderNavbarWrapper>
      <HeaderNavbarInnerWrapper>
        <div>J-LYTN</div>
        <div>{`[ menu ]`}</div>
      </HeaderNavbarInnerWrapper>
    </HeaderNavbarWrapper>
  );
};
