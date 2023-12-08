import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useFetcher } from "../../hooks/fetcher";
import api from "../../lib/axios";

export const AdminProductEdit = () => {
  const params = useParams();
  const id = params.id;
  const { data: product, loading } = useFetcher(`/products/${id}`);
  const nav = useNavigate();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);
    await api.post("/products/edit", formData);
    nav("/admin");
  }, []);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <section className="container">
          <h1 className="mb-8 text-center">Edit product</h1>

          <form className="my-auto flex flex-col space-y-8" onSubmit={onSubmit}>
            <input name="productID" type="hidden" value={id} />
            <input
              name="name"
              placeholder="Product Name"
              className="input-txt"
              defaultValue={product?.name}
              required
            />
            <textarea
              name="desc"
              placeholder="Product description"
              required
              className="input-txt"
              defaultValue={product?.desc}
            />
            <input
              name="price"
              placeholder="Product price"
              type="number"
              className="input-txt"
              required
              defaultValue={product?.price}
            />
            <button className="btn">Edit Product</button>
          </form>
        </section>
      )}
    </section>
  );
};
