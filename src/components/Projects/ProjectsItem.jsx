const ProjectsItem = ({ title, desc, img }) => {
  return (
    <div className='border border-custom-neutral rounded-md p-2'>
      <div className='w-full overflow-hidden  rounded-md'>
        <img
          src={img.url}
          alt={img.title}
          title={img.title}
          className='w-full object-cover hover:scale-[1.05] transition-all'
        />
      </div>
      <div className='bg-custom-neutral rounded-md p-4 text-custom-white mt-2 text-center'>
        <h3 className='text-[20px] font-semibold'>{title}</h3>
        <p className='text-[14px]'>{desc}</p>
      </div>
    </div>
  );
};
export default ProjectsItem;
