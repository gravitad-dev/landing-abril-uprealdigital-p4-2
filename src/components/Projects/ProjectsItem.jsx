const ProjectsItem = ({ title, desc, img }) => {
  return (
    <div className='border border-custom-neutral rounded-md p-2'>
      <div className='w-full h-[700px] overflow-hidden  rounded-md hidden lg:block lg:relative group'>
        <div
          className='w-full h-full bg-cover bg-center lg:bg-left-bottom'
          style={{ backgroundImage: `url(${img.url})` }}
          title={img.title}
        ></div>
        {/* text for desktop*/}
        <div
          className='bg-custom-neutral rounded-md p-5 text-custom-white text-center  
          flex flex-col justify-center h-full
         lg:bg-custom-neutral/70  lg:absolute top-0 left-0  lg:opacity-0 
         lg:group-hover:opacity-100 lg:transition-opacity
         '
        >
          <h3 className='text-[20px] font-semibold'>{title}</h3>
          <ul className='flex flex-col gap-8 mt-10'>
            {desc.map((item, idx) => (
              <li key={idx}>
                <p className='leading-[1.6]'>{item}</p>
              </li>
            ))}
          </ul>
          <p className='text-[14px]'>{desc}</p>
        </div>
      </div>
      {/* text for mobile*/}
      <div
        className='bg-custom-neutral rounded-md p-5 text-custom-white text-center  
          flex flex-col justify-center h-full lg:hidden
      
         '
      >
        <h3 className='text-[20px] font-semibold'>{title}</h3>
        <ul className='flex flex-col gap-8 mt-10'>
          {desc.map((item, idx) => (
            <li key={idx}>
              <p className='leading-[1.6]'>{item}</p>
            </li>
          ))}
        </ul>
        <p className='text-[14px]'>{desc}</p>
      </div>
    </div>
  );
};
export default ProjectsItem;
