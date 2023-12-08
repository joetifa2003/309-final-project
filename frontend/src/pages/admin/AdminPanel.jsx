import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { ProductCard } from "../../components/ProductCard";
import { ProductsContainer } from "../../components/ProductsContainer";
import { useFetcher } from "../../hooks/fetcher";

export const AdminPanel = () => {
  const { data: products, loading, refetch } = useFetcher("/products");

  return (
    <section className="container flex flex-col space-y-8">
      <h1>Products</h1>
      <Link to={"/admin/create"} className="btn">
        <span>Create product</span>
      </Link>

      <div>
        {loading ? (
          <Loading />
        ) : (
          <ProductsContainer>
            {products.map((product) => (
              <ProductCard
                key={product["_id"]}
                p={product}
                showAddToCart={false}
                showAdminControls={true}
                onRemove={refetch}
              />
            ))}
          </ProductsContainer>
        )}
      </div>
    </section>
  );
};
