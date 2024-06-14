import data from '../../data.json';
import Title from '../ui/Title';
import StatItem from './StatItem';

const About = () => {
  const { title, subtitle, stats, img } = data['section-six'];
  return (
    <section className='py-[100px]' id='about-us'>
      <Title title={title} subtitle={subtitle} />
      <div
        className='bg-custom-neutral text-custom-white rounded-md p-4 mt-10
        flex flex-col gap-4 md:flex-row md:justify-around
      '
      >
        {/* stats */}
        <div className='grid grid-cols-3 w-full items-center'>
          {stats.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </div>
        {/* img */}
        <div className='w-full md:w-[30%] h-[150px] overflow-hidden rounded-md'>
          <img
            src={img.url}
            alt={img.title}
            title={img.title}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};
export default About;
