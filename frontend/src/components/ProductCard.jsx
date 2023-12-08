import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/user";
import { useAddToCart } from "../hooks/cart";
import api from "../lib/axios";
import { getApiUrl } from "../lib/getApiUrl";

export const ProductCard = ({
  p,
  showAddToCart = true,
  showRemoveFromCart = false,
  onRemoveFromCart = null,
}) => {
  const { user } = useContext(UserContext);
  const nav = useNavigate();

  const addToCart = useAddToCart(p["_id"]);

  const removeFromCart = useCallback(async () => {
    if (!user) return;

    await api.post("/cart/remove", {
      productID: p["_id"],
    });

    await Swal.fire({
      title: "Product removed from cart!",
      icon: "success",
    });

    if (onRemoveFromCart) {
      onRemoveFromCart();
    }
  }, [user]);

  return (
    <div
      className="group relative flex w-full cursor-pointer flex-col space-y-8 border-4 border-accent bg-white p-8"
      onClick={() => nav(`/product/${p["_id"]}`)}
    >
      {user && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 transition-all duration-200 group-hover:opacity-100">
          {showAddToCart && (
            <button className="btn bg-white" onClick={addToCart}>
              Add to cart
            </button>
          )}
          {showRemoveFromCart && (
            <button className="btn bg-white" onClick={removeFromCart}>
              Remove from cart
            </button>
          )}
        </div>
      )}
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
