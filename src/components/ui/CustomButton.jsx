const CustomButton = ({ children, fullWidth, variant }) => {
  return (
    <button
      className={`
      ${
        variant === 'primary'
          ? 'border-custom-white text-custom-white'
          : 'border-custom-neutral text-custom-neutral'
      }
        min-w-[100px] bg-transparent border  px-4 py-2 rounded-[100px]
        ${fullWidth ? 'w-full' : 'w-fit'}
        `}
    >
      {children}
    </button>
  );
};
export default CustomButton;
