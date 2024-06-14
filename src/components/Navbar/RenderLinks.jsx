import data from '../../data.json';
import CustomLink from '../ui/CustomLink';

const RenderLinks = () => {
  const { menuLinks } = data['section-nav'];

  return (
    <>
      {menuLinks.map((link) => (
        <li key={link.id}>
          <CustomLink {...link} />
        </li>
      ))}
    </>
  );
};
export default RenderLinks;
