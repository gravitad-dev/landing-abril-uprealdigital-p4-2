const StatItem = ({ number, desc }) => {
  return (
    <div className='text-center'>
      <h4 className='font-semibold text-custom-yellow text-[25px] md:text-[40px]'>
        {number}
      </h4>
      <p className='text-[14px]'>{desc}</p>
    </div>
  );
};
export default StatItem;
