const CustomLink = ({ href, title, isExternal }) => {
  return (
    <a
      href={href}
      className='hover:text-custom-yellow'
      target={isExternal ? '_blank' : '_self'}
      rel='noreferrer'
      title={title}
    >
      {title}
    </a>
  );
};
export default CustomLink;
