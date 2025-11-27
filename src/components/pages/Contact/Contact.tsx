import { ContactWrapper } from './Contact.styles';
import type { ContactProps } from './types';

export const Contact = ({}: ContactProps) => {
  return (
    <ContactWrapper>
      <div>Contact</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ textTransform: 'uppercase' }}>Get in touch</div>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Subject' />
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </ContactWrapper>
  );
};
