const products = [
  {
    id: 1,
    name: "Casual Shirt",
    price: 799,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15941910/2021/10/15/b4f7ac5c-5a5c-4a03-b8ef-8f7cfd4f1e061634717779010-Roadster-Men-Shirts-6071634717778871-1.jpg",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 1399,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18320862/2022/9/21/c0de1f4f-92e7-4f0f-a96a-6471e27f7a471666375912914-Roadster-Men-Jeans-4691666375912767-1.jpg",
  },
  {
    id: 3,
    name: "Women Floral Dress",
    price: 1599,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19800496/2023/1/13/1e0b38a2-6e6a-4ca6-a6ea-35bb3d18b7f01673540944974-WROGN-Women-Dresses-2621673540944077-1.jpg",
  },
  {
    id: 4,
    name: "Sneakers",
    price: 2499,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15827712/2021/10/12/9e770406-8a68-4970-a212-85d9f89d22271634026964617-Nike-Men-Sneakers-3621634026963544-1.jpg",
  },
];

function App() {
  const [cart, setCart] = React.useState([]);

  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <>
      <header>Myntra Clone</header>
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart ({cart.reduce((a, c) => a + c.quantity, 0)})</h2>
        {cart.length === 0 && <p className="empty-cart">Your cart is empty</p>}
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name} x {item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>×</button>
          </div>
        ))}
        {cart.length > 0 && (
          <p>
            <b>Total: ₹{cart.reduce((a, c) => a + c.price * c.quantity, 0)}</b>
          </p>
        )}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
