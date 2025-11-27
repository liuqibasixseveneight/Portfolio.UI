import { useEffect, type FC } from 'react';
import Lenis, { type LenisOptions } from 'lenis';
import type { SmoothScrollProps } from './types';

export const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const options: LenisOptions = {
      duration: 1.2,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
    };

    const lenis = new Lenis(options);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
