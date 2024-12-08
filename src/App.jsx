import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to add a product to the cart
  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const filteredCartItems = cartItems.filter(
      (each) => each.id !== product.id
    );
    setCartItems(filteredCartItems);
  };

  // Fetch products from the API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products...", error);
      });
  }, []);

  return (
    <>
      <Navbar cartItems={cartItems} openModal={() => setIsModalOpen(true)} />
      <div className="bg-slate-500 text-center">
        <h1 className="text-4xl font-bold text-gray-900 py-5">Products List</h1>
        <ProductList products={products} addToCart={addToCart} />
      </div>
      {isModalOpen && (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default App;
