function Button({ children, className }) {
  return (
    <button
      className={`w-full border-4 border-accent p-4 text-2xl font-medium leading-none transition-all duration-200 hover:bg-accent hover:text-white lg:w-auto ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
