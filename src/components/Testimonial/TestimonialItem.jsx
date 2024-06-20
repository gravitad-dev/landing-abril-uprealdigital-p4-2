import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';

const TestimonialItem = ({ comment, user, onNext, onPrev }) => {
  return (
    <div className=' grid'>
      <div className='h-[150px] grid place-items-center'>
        <p className='text-center font-semibold text-[20px] lg:text-[25px] italic text-pretty'>
          {comment}
        </p>
      </div>

      <div className='flex items-center justify-center gap-5 flex-wrap sm:justify-between mt-[60px] md:mt-10'>
        {/* user */}
        <div className='flex gap-4 items-center'>
          <img
            src={user.photo.url}
            alt={user.title}
            title={user.title}
            className='
          w-[64px] h-[64px] rounded-full object-cover
          '
          />
          {/* name and role */}
          <div>
            <h6 className='font-semibold text-[20px]'>{user.name}</h6>
            <small>{user.role}</small>
          </div>
        </div>
        {/* arrows */}
        {/* <div className='flex gap-4 '>
          <button
            className='border border-custom-neutral rounded-full w-[50px]
           h-[50px] grid place-content-center hover:bg-custom-yellow transition-colors'
            onClick={onPrev}
          >
            <FaArrowLeftLong />
          </button>
          <button
            className='border border-custom-neutral rounded-full w-[50px]
           h-[50px] grid place-content-center hover:bg-custom-yellow transition-colors'
            onClick={onNext}
          >
            <FaArrowRight />
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default TestimonialItem;
