import PropTypes from "prop-types";

export default function HomePageMainButtons({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-200 text-black p-20 montserrat-alternates-regular
      hover:shadow-10xl
     rounded-2xl shadow-xl lg:w-[420px] w-[300px] h-fit hover:bg-slate-100 hover:cursor-pointer
    "
    >
      {children}
    </button>
  );
}

// Correct propTypes definition
HomePageMainButtons.propTypes = {
  children: PropTypes.node.isRequired, // Validates that 'children' can be anything renderable
  onClick: PropTypes.func.isRequired, // Validates that 'onClick' is a function
};
