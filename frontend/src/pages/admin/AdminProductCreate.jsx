export const AdminProductCreate = () => {
  return (
    <section className="container flex h-screen flex-col">
      <h1 className="text-center">Admin Product Create</h1>

      <form className="my-auto flex flex-col space-y-8">
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
