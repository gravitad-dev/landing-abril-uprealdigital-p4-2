import RenderLinks from './RenderLinks';

const MenuDesktop = () => {
  return (
    <div className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal px-1'>{RenderLinks()}</ul>
    </div>
  );
};
export default MenuDesktop;
