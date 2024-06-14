const ServicesItem = ({ text, icon }) => {
  return (
    <div
      className='bg-custom-neutral text-custom-white rounded-md p-2 h-[200px] grid place-content-center
    text-center w-full
    '
    >
      <div className='w-full grid place-content-center'>
        <img
          src={icon.url}
          alt={icon.title}
          title={icon.title}
          className='w-[50px]'
        />
      </div>
      <h4 className='mt-5 font-semibold'>{text}</h4>
    </div>
  );
};
export default ServicesItem;
