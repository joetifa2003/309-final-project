import { getApiUrl } from "../lib/getApiUrl";

export const ProductCard = ({ p }) => {
  return (
    <div className="flex flex-col space-y-8 border-4 border-accent bg-white p-8">
      <img
        src={`${getApiUrl()}/upload/${p.imgUrl}`}
        className="h-[400px] object-contain"
      />
      <div className="flex flex-col space-y-4">
        <div className="text-2xl font-bold">{p.name}</div>
        <div>Price: {p.price} L.E</div>
      </div>
    </div>
  );
};
