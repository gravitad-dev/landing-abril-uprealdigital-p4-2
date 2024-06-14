import { useState } from 'react';
import data from '../../data.json';
import Title from '../ui/Title';
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {
  const { title, subtitle, testimonials } = data['section-eigth'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const item = testimonials[selectedIndex];

  const handlePrev = () => {
    let condition = selectedIndex > 0;
    const newIndex = condition ? selectedIndex - 1 : testimonials.length - 1;
    setSelectedIndex(newIndex);
  };

  const handleNext = () => {
    let condition = selectedIndex < testimonials.length - 1;
    const newIndex = condition ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
  };

  return (
    <section className='py-[100px]' id='testimonials'>
      <Title title={title} subtitle={subtitle} />
      <div className=' mt-10'>
        <TestimonialItem
          key={item.id}
          {...item}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
};
export default Testimonial;
