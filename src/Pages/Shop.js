import React, { useState } from "react";
import "./Shop.css";

function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const products = [
    {
      id: 1,
      name: "Fresh Cabbage",
      price: 19.95,
      image: "/images/Shop/Cabbage.jpg",
    },
    {
      id: 2,
      name: "Tomatoes",
      price: 22.99,
      image: "/images/Shop/tomatoes.jpg",
    },
    {
      id: 3,
      name: "chickens for sale",
      price: 69.99,
      image: "/images/Shop/fresh-chicken.webp",
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo({ ...buyerInfo, [name]: value });
  };

  const handlePayment = () => {
    const emailContent = `
      Thank you for your purchase!
      
      Buyer Information:
      Name: ${buyerInfo.name}
      Email: ${buyerInfo.email}
      Address: ${buyerInfo.address}
      
      Items Purchased:
      ${cartItems.map((item) => `${item.name} - R${item.price}`).join("\n")}
      
      Total Amount: R${cartItems.reduce((total, item) => total + item.price, 0)}
    `;

    window.location.href = `mailto:ulterspace@gmail.com?subject=Purchase Information&body=${encodeURIComponent(
      emailContent
    )}`;
  };

  return (
    <div className="container">
      <h1>Services</h1>

      <div>
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <h3>{product.name}</h3>
              <p>R{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <p>R{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              ))}
            </div>
            <p>
              Total: R
              {cartItems.reduce((total, item) => total + item.price, 0)}
            </p>
            <h2>Buyer Information</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={buyerInfo.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={buyerInfo.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={buyerInfo.address}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handlePayment} style={{backgroundcolor: '#1f46bb ',border: 'none', color: 'white',padding: '10px 20px', borderradius: '5px',cursor: 'pointer',fontsize: '1em'}}>Pay Now</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
