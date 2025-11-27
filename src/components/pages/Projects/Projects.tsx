import type { ProjectsProps } from './types';
import { ProjectsWrapper } from './Projects.styles';

export const Projects = ({}: ProjectsProps) => {
  return (
    <ProjectsWrapper>
      <div>Projects</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div style={{ textTransform: 'uppercase' }}>CluedIn</div>
          <div>MDM platform - Microsoft-partnered.</div>
        </div>

        <div>
          <div style={{ textTransform: 'uppercase' }}>Dedalus</div>
          <div>
            OneResponse, OneED - Paramedic ambulance application, emergency
            department system.
          </div>
        </div>

        <div>
          <div style={{ textTransform: 'uppercase' }}>DXC Technology</div>
          <div>
            OneResponse, OneED - Paramedic ambulance application, emergency
            department system.
          </div>
          <div>
            Team Defence Information - Joint Intelligence Group - Vanguard
            (JIG-V) - defence application for acronym searching.
          </div>
        </div>

        <div>
          <div style={{ textTransform: 'uppercase' }}>CV Host</div>
          <div>Creation, hosting and sharing of CVs/resumes.</div>
        </div>

        <div>
          <div style={{ textTransform: 'uppercase' }}>Codesplanation</div>
          <div>
            The sharing, annotation and explanation of code blocks and snippets.
          </div>
        </div>

        <div>
          <div style={{ textTransform: 'uppercase' }}>J-LYTN</div>
          <div>My personal website and portfolio.</div>
        </div>
      </div>
    </ProjectsWrapper>
  );
};
