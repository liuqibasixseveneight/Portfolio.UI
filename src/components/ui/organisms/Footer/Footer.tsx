import type { FooterProps } from './types';
import { FooterInnerWrapper, FooterWrapper } from './Footer.styles';

export const Footer = ({}: FooterProps) => {
  return (
    <FooterWrapper>
      <FooterInnerWrapper>Footer</FooterInnerWrapper>
    </FooterWrapper>
  );
};
