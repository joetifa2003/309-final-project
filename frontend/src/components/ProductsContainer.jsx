export const ProductsContainer = ({ children }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};
