import type { AboutProps } from './types';
import { AboutWrapper } from './About.styles';

export const About = ({}: AboutProps) => {
  return (
    <AboutWrapper>
      <div>About</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          I turn messy enterprise data into interfaces that people actually
          enjoy using.
        </div>
        <div>
          Start-up pace with polish. Shipping production features without the
          drama.
        </div>
        <div>
          React + TypeScript frontends that integrate with whatever the backend
          throws.
        </div>
        <div>
          Six years (and counting!) of shipping frontends across healthcare,
          enterprise, and high-pace start-ups.
        </div>
        <div>
          Balancing performance, accessibility, and visuals, to help teams ship
          confidently.
        </div>
      </div>
    </AboutWrapper>
  );
};
