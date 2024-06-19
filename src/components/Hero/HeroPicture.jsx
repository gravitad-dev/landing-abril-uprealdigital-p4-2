import data from '../../data.json';

const HeroPicture = () => {
  const { img, captionImg } = data['section-one'];

  return (
    <img
      src={img.url}
      alt={img.alt}
      title={img.title}
      className='w-full flex-1 h-[400px] object-cover rounded-md  aspect-square'
    />
  );
};
export default HeroPicture;
