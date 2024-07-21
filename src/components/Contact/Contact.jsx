import data from '../../data.json';
import CustomButton from '../ui/CustomButton';
import Title from '../ui/Title';

const Contact = () => {
  const { text, desc, img, button } = data['section-two'];

  return (
    <section className="py-[150px] flex flex-col gap-5">
      <div
        className="rounded-md bg-custom-neutral text-custom-white p-5
      flex flex-col gap-4 items-center justify-around
      "
      >
        <img
          src={img.url}
          alt={img.alt}
          title={img.title}
          className="hidden md:block rounded-md object-cover w-full h-[350px]"
        />
        <div className="grid place-items-center">
          <h2 className="text-[40px] font-semibold text-center">{text}</h2>
          <ul className="text-center flex flex-col gap-8 my-10">
            {desc.map((p) => (
              <li className="mx-auto w-[90%]">{p}</li>
            ))}
          </ul>
          <CustomButton variant="primary">
            <a title={button.title} target="_blank" href={button.href}>
              {button.text}
            </a>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};
export default Contact;
