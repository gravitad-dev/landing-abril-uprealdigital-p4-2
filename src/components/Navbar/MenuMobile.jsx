import RenderLinks from './RenderLinks';

const MenuMobile = () => {
  return (
    <ul className='p-2 shadow menu dropdown-content z-[1] bg-custom-neutral rounded-box w-52'>
      {RenderLinks()}
    </ul>
  );
};
export default MenuMobile;
