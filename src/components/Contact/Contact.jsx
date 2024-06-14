import data from '../../data.json';
import CustomButton from '../ui/CustomButton';
import Title from '../ui/Title';

const Contact = () => {
  const { text, img, button } = data['section-two'];

  return (
    <section className='py-[150px] flex flex-col gap-5 md:flex-row md:justify-between'>
      <h2 className='text-[40px] font-semibold text-center lg:text-end  lg:order-1'>
        {text}
      </h2>
      <div
        className='rounded-md bg-custom-neutral text-custom-white p-4
      flex gap-4 items-center justify-around md:w-[50%] h-[150px]
      '
      >
        <img
          src={img.url}
          alt={img.alt}
          title={img.title}
          className='rounded-md w-[50%] object-cover h-full'
        />
        <div className='w-[50%] grid place-content-center'>
          <CustomButton variant='primary'>
            <a title={button.title} href={button.href}>
              {button.text}
            </a>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};
export default Contact;
