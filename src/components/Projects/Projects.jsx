import data from '../../data.json';
import Title from '../ui/Title';
import ProjectsItem from './ProjectsItem';

const Projects = () => {
  const { items } = data['section-five'];
  return (
    <section className='py-[100px]' id='projects'>
      <Title title='Projects' subtitle='' />
      <div className='grid grid-cols-projects gap-10 mt-10 place-content-center'>
        {items.map((project) => (
          <ProjectsItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
