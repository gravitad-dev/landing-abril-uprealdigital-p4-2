import data from '../../data.json';

const HeroPicture = () => {
  const { img, captionImg } = data['section-one'];

  return (
    <div className='bg-custom-neutral text-custom-white rounded-md p-4 w-[100%] max-w-[500px]'>
      <img
        src={img.url}
        alt={img.alt}
        title={img.title}
        className='w-full object-cover rounded-md max-h-[300px] aspect-square'
      />
      <div className='py-5 text-center'>
        <h3 className='text-[20px]'>{captionImg}</h3>
      </div>
    </div>
  );
};
export default HeroPicture;
