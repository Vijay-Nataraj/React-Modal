const Navbar = ({ cartItems, openModal }) => {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8 bg-gray-800 text-white">
        <h1 className="text-2xl">Fake Store</h1>
        <div>
          <button
            onClick={openModal}
            className="relative bg-red-900 p-2 px-4 rounded-lg hover:bg-green-900"
          >
            <i className="bi-cart-fill me-2"></i>
            Cart <span className="ms-1">{cartItems.length}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
