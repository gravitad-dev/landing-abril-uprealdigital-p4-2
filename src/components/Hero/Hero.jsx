import HeroContent from './HeroContent';
import HeroPicture from './HeroPicture';

const Hero = () => {
  return (
    <section
      className='py-[50px] lg:p-0 lg:h-screen flex flex-col gap-10 items-center  
      md:flex-row md:justify-between'
      id='home'
    >
      <HeroContent />
      <HeroPicture />
    </section>
  );
};
export default Hero;
