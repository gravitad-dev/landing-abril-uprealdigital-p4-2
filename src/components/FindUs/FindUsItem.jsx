const FindUsItem = ({ text, desc }) => {
  return (
    <li className='border border-custom-neutral rounded-md p-4 grid grid-flow-row content-center gap-2'>
      <h4 className='text-[25px] font-semibold '>{text}</h4>
      <p>{desc}</p>
    </li>
  );
};
export default FindUsItem;
