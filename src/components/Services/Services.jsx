import Title from '../ui/Title';

import data from '../../data.json';
import ServicesItem from './ServicesItem';

const Services = () => {
  const { services } = data['section-four'];
  return (
    <section className='py-[100px]' id='services'>
      <Title title='Services' subtitle='Lorem ipsum' />
      <div className='grid grid-cols-services gap-10 mt-10'>
        {services.map((service) => (
          <ServicesItem key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;
