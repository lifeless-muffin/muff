import { useEffect, useState } from 'react';
import PrimaryHeading from '../../elements/headings/PrimaryHeading';
import PrimaryParagraph from '../../elements/paragraphs/PrimaryParagraph';
import { getProjects } from '../../../services/database.service';
import ProjectSection from '../../modules/projectsSection/ProjectsSection';
import IconRenderer from '../../elements/icons/IconRenderer';

const ProjectsPage = () => {

  const [projectsList, setProjectsList] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(false);

  const updateProjectsList = (data: any) => {
    let projectsArray: any = [];

    data.forEach((doc: any) => {
      if (doc && Object.keys(doc).length > 0) {
        const docData: any = doc.data();
        projectsArray.push(docData);
      }
    })

    setProjectsList(projectsArray);
    setLoadingProjects(false);
  }

  useEffect(() => {
    getProjects().then((res: any) => {
      updateProjectsList(res)
    }).catch((err) => {
      setProjectsError(true);
      setLoadingProjects(false);
    })
  }, [])

  return (
    <div className="projects-page-content">
      <div className='hero-section' >
        <div className="hero-section-content">
          <PrimaryHeading text="My Projects" />
          <PrimaryParagraph text="Below are list of projects I have done and been a part of with live demo links and github repository link, if is an open source project." />
        </div>
      </div>

      {loadingProjects && (
        <div className="loader-container">
          <IconRenderer
            iconSource='/assets/loading-icon.svg'
            iconAlt='Loading Animated Icon'
            iconSize={{
              width: '70px',
              height: '70px'
            }}
          />
        </div>
      )}

      {!loadingProjects && !projectsError && (
        <ProjectSection featured={false} projects={projectsList} />
      )}

      {!loadingProjects && projectsError && (
        <div className="error-container">Some Error Occured</div>
      )}

    </div>
  );
}

export default ProjectsPage; 