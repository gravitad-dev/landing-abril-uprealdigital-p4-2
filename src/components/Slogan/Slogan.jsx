import data from '../../data.json';
import Title from '../ui/Title';

const Slogan = () => {
  const { title, subtitle, desc } = data['section-three'];
  return (
    <section className='py-[100px] flex flex-col md:flex-row md:items-center md:gap-5 md:justify-between'>
      <div className='max-w-[500px]'>
        <Title title={title} subtitle={subtitle} />
      </div>
      <p className='text-center mt-4 max-w-[400px]'>{desc}</p>
    </section>
  );
};
export default Slogan;
