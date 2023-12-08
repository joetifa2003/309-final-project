import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useFetcher } from "../hooks/fetcher";

export const AdminPanel = () => {
  const { data: products, loading } = useFetcher("/products");

  return (
    <section className="container space-y-16">
      <h1 className="text-center">Admin Panel</h1>

      <div className="flex justify-between">
        <h1>Products</h1>
        <Link to={"/admin/create"} className="btn">
          Create Product
        </Link>
      </div>

      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {products.map((product) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
