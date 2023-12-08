import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../context/user";
import api from "../lib/axios";

export const useAddToCart = (productID) => {
  const { user } = useContext(UserContext);
  const nav = useNavigate();

  const cb = useCallback(
    async (e) => {
      e?.stopPropagation();

      if (!user) {
        nav("/login");
        return;
      }

      await api.post("/cart/add", {
        productID: productID,
      });

      await Swal.fire({
        title: "Product added to cart!",
        icon: "success",
      });
    },
    [user, productID],
  );

  return cb;
};
