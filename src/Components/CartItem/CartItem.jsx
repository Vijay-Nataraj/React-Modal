const CartItem = ({ product, removeFromCart }) => {
  return (
    <li>
      <div className="bg-white flex flex-col justify-center items-center m-5 p-5 w-auto h-auto max-w-[500px] lg:max-w-[700px] overflow-hidden rounded-lg shadow-md transition-all duration-100 ease-linear hover:scale-105">
        <img
          src={product.image}
          className="w-full h-48 object-cover mb-5"
          alt={product.title}
        />
        <h3 className="mb-2 text-lg text-gray-900 font-semibold">
          {product.title}
        </h3>
        <p className="mb-2 text-lg font-semibold text-blue-900">
          $ {product.price}
        </p>
        <button
          onClick={() => removeFromCart(product)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Remove from Cart
        </button>
      </div>
    </li>
  );
};

export default CartItem;
