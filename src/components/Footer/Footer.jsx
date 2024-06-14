import CustomButton from '../ui/CustomButton';
import CustomLink from '../ui/CustomLink';

import data from '../../data.json';
const Footer = () => {
  const { text, button } = data['section-footer'];
  const { menuLinks } = data['section-nav'];
  return (
    <footer
      className='footer footer-center p-10 bg-custom-neutral text-custom-white rounded
    max-w-[1440px] mx-auto'
    >
      <nav className='flex flex-col gap-4 md:flex-row md:justify-between w-full'>
        <p className='text-[25px]'>{text}</p>
        <CustomButton variant='primary'>
          <CustomLink href={button.href} title={button.title} />
        </CustomButton>
      </nav>
      <nav className='flex flex-wrap justify-center gap-5'>
        {menuLinks.map((link) => (
          <CustomLink key={link.id} {...link} />
        ))}
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};
export default Footer;
