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
  onRemove = null,
  showAdminControls = false,
}) => {
  const { user } = useContext(UserContext);
  const nav = useNavigate();

  const addToCart = useAddToCart(p["_id"]);

  const removeFromCart = useCallback(
    async (e) => {
      e?.stopPropagation();

      if (!user) return;

      await api.post("/cart/remove", {
        productID: p["_id"],
      });

      const res = await Swal.fire({
        title: "Are you sure you want to remove product from cart?",
        showConfirmButton: true,
        showCancelButton: true,
      });

      if (res.isDenied || res.isDismissed) {
        return;
      }

      await Swal.fire({
        title: "Product removed from cart!",
        icon: "success",
      });

      if (onRemove) {
        onRemove();
      }
    },
    [user],
  );

  const removeProduct = useCallback(
    async (e) => {
      e?.stopPropagation();
      if (!user) return;

      const res = await Swal.fire({
        title: "Are you sure you want to remove product?",
        showConfirmButton: true,
        showCancelButton: true,
      });

      if (res.isDenied || res.isDismissed) {
        return;
      }

      await api.delete(`/products/${p["_id"]}`);

      await Swal.fire({
        title: "Product removed!",
        icon: "success",
      });

      onRemove();
    },
    [user],
  );

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
          {showAdminControls && (
            <div className="flex flex-col space-y-8">
              <button className="btn bg-white" onClick={removeProduct}>
                Edit product
              </button>
              <button className="btn bg-white" onClick={removeProduct}>
                Remove product
              </button>
            </div>
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
