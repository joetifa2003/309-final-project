import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { ProductCard } from "../components/ProductCard";
import { useAddToCart } from "../hooks/cart";
import { useFetcher } from "../hooks/fetcher";

export const Product = () => {
  const params = useParams();
  const { data: product, loading } = useFetcher(`/products/${params.id}`);
  const addToCart = useAddToCart(params.id);

  return (
    <section className="container mt-8">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col gap-8 lg:flex-row">
            <ProductCard p={product} />
            <p className="whitespace-pre-wrap">{product.desc}</p>
          </div>
          <button className="btn mt-8 bg-white" onClick={addToCart}>
            Add to cart
          </button>
        </>
      )}
    </section>
  );
};
