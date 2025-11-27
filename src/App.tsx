import { AppWrapper, ContentWrapper } from './App.styles';
import { About, Contact, Home, Intro, Projects } from './components/pages';
import { Footer, HeaderNavbar, SmoothScroll } from './components/ui';

export const App = () => {
  return (
    <>
      <SmoothScroll>
        <AppWrapper>
          <HeaderNavbar />

          <ContentWrapper>
            <Home />
            <Intro />
            <About />
            <Projects />
            <Contact />
          </ContentWrapper>

          <Footer />
        </AppWrapper>
      </SmoothScroll>
    </>
  );
};
