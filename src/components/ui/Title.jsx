import { WiSolarEclipse } from 'react-icons/wi';

const Title = ({ title, subtitle, withIcon }) => {
  return (
    <div className='text-center lg:text-start'>
      <WiSolarEclipse color='text-custom-neutral' size='24px' />
      <p>{subtitle}</p>
      <h2 className='text-[40px] font-semibold'>{title}</h2>
    </div>
  );
};
export default Title;
