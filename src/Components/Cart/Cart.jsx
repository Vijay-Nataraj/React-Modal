import CartItem from "../CartItem/CartItem";

const Cart = ({ cartItems, removeFromCart, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="container max-h-[90vh] bg-slate-500 p-6 rounded shadow-lg overflow-y-auto">
        <button
          onClick={closeModal}
          className="text-gray-500 bg-gray-300 float-right text-2xl shadow-lg"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cartItems.length === 0 ? (
            <p className="text-center">No items in the cart.</p>
          ) : (
            cartItems.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
