import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../lib/axios";

export const AdminProductCreate = () => {
  const nav = useNavigate();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await api.post("/products/create", formData);
    nav("/admin");
  }, []);

  return (
    <section className="container flex h-screen flex-col">
      <h1 className="text-center">Admin Product Create</h1>

      <form className="my-auto flex flex-col space-y-8" onSubmit={onSubmit}>
        <input name="productImg" type="file" required />
        <input
          name="name"
          placeholder="Product Name"
          className="input-txt"
          required
        />
        <input
          name="price"
          placeholder="Product price"
          type="number"
          className="input-txt"
          required
        />
        <button className="btn">Create Product</button>
      </form>
    </section>
  );
};
