import useNav from '../../hooks/useNav';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const { hasScrolled } = useNav();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`
      btn btn-circle bg-custom-neutral border border-custom-white
     fixed bottom-[5vh] right-[3vw] ${hasScrolled ? 'opacity-100' : 'opacity-0'}
      `}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};
export default ScrollTop;
