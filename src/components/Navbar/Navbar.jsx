import CustomButton from '../ui/CustomButton';
import Hamburguer from '../ui/Hamburguer';
import Logo from '../ui/Logo';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

import data from '../../data.json';
const Navbar = () => {
  const { button } = data['section-nav'];
  return (
    <div className="navbar bg-custom-neutral text-custom-white lg:rounded-lg max-w-[1440px] mx-auto px-2 lg:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <Hamburguer />
          <MenuMobile />
        </div>
        <Logo />
      </div>
      <MenuDesktop />
      <div className="navbar-end">
        <CustomButton variant="primary">
          <a href={button.href} target="_blank" title={button.title}>
            {button.text}
          </a>
        </CustomButton>
      </div>
    </div>
  );
};
export default Navbar;
