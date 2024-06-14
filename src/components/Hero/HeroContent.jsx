import data from '../../data.json';
import CustomButton from '../ui/CustomButton';

const smallClass = 'text-[16px] lg:text-[18px]';
const spanClass = 'flex gap-4 items-center';

const HeroContent = () => {
  const { text, desc, button } = data['section-one'];

  return (
    <div className='max-w-[600px]'>
      <h1 className='text-[50px] lg:text-[60px] font-bold flex flex-col '>
        <span className={spanClass}>
          <small className={smallClass}>01</small>
          {text['01']}
        </span>
        <span className={spanClass}>
          <small className={smallClass}>02</small>
          {text['02']}
        </span>
        <span className={spanClass}>
          <small className={smallClass}>03</small>
          {text['03']}
        </span>
      </h1>
      <p className='paragraph w-[90%] max-w-[500px] my-4'>{desc}</p>
      <CustomButton>
        <a href={button.href} title={button.title}>
          {button.text}
        </a>
      </CustomButton>
    </div>
  );
};
export default HeroContent;
