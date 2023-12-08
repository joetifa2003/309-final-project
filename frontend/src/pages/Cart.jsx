import { Loading } from "../components/Loading";
import { ProductCard } from "../components/ProductCard";
import { ProductsContainer } from "../components/ProductsContainer";
import { useFetcher } from "../hooks/fetcher";

export const Cart = () => {
  const { data: products, loading, refetch } = useFetcher("/cart/products");

  return (
    <section className="container space-y-8">
      <h1 className="mt-8 text-center">Cart</h1>

      {loading ? (
        <Loading />
      ) : (
        <>
          <ProductsContainer>
            {products.map((p) => (
              <ProductCard
                key={p["_id"] + p["ciID"]}
                p={p}
                showAddToCart={false}
                showRemoveFromCart={true}
                onRemoveFromCart={refetch}
              />
            ))}
          </ProductsContainer>
          <div className="text-2xl font-bold">
            Total: {products.reduce((a, b) => a + b.price, 0)}
          </div>
        </>
      )}
    </section>
  );
};
