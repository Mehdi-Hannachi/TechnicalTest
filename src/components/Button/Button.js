const Button = (props) => {
  return (
    <button
      className="text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
      style={{
        backgroundColor: "#E28D5A",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
