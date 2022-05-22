const Button = ({ name, ...props }) => {
  return (
    <button
      className={
        "w-button bg-black border-2 text-white rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-black"
      }
      {...props}
    >
      {name}
    </button>
  );
};
export default Button;
