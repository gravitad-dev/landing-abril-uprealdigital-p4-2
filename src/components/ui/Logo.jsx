import data from '../../data.json';

const Logo = () => {
  const { logo } = data;

  return (
    <a href='home' className='flex items-center gap-2'>
      <img
        src={logo.url}
        alt={logo.alt}
        title={logo.title}
        className='
      w-[40px] md:w-[50px] rounded-md
      '
      />
      {/* <span className='text-custom-white text-[30px] font-bold'>flatter</span> */}
    </a>
  );
};
export default Logo;
