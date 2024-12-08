import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
};

export default ProductList;
