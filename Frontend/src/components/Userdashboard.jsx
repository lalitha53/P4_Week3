import React, { useState } from 'react';
import './Userdashboard.css';

const Userdashboard = () => {
  // State to track the visibility of the top bar and cart items
  const [isBannerVisible, setBannerVisible] = useState(true);
  const [cartItems, setCartItems] = useState([]); // State to track items in the cart

  // Function to close the banner
  const closeBanner = () => {
    setBannerVisible(false);
  };

  // Function to add an item to the cart (can be modified to add real products)
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to view the cart
  const viewCart = () => {
    console.log(cartItems); // Just logs for now, can open a cart modal or page
  };

  return (
    <div>
      {/* Conditionally render the top bar based on isBannerVisible */}
      {isBannerVisible && (
        <div className="top-bar">
          <span>FREE SHIPPING OVER Rs.1500/-</span>
          <button className="close-btn" onClick={closeBanner}>×</button>
        </div>
      )}

      {/* Navbar Section */}
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src="/only_only_logo-png.png" alt="StyleU Logo" />
          </a>
          StyleU
        </div>

        <div className="left-links">
          <a href="#">Shop</a>
          <a href="#">New In</a>
          <a href="#">Tops</a>
          <a href="#">Bottoms</a>
          <a href="#">Sale</a>
        </div>

        <div className="right-icons">
          <a href="#" onClick={viewCart}>
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </a>
          <a href="#"><i className="fas fa-heart"></i></a> {/* Wishlist Icon */}
          <a href="#"><i className="fas fa-user"></i></a> {/* User Icon */}
        </div>
      </div>

      {/* Hero Section for Summer */}
      <div className="hero">
        <img
          alt="A woman in a black dress standing in a field of tall grass under a clear blue sky"
          src="https://storage.googleapis.com/a1aa/image/6jufl7fMC7oKtUFuvEhcQbTBcyCt9tT8XIDMa5lep1fyiv1PB.jpg"
        />
        <div className="text">
          <h1>SUMMER COLLECTION</h1>
          <button onClick={() => addToCart('Summer Collection Item')}>Add to Cart</button>
        </div>
      </div>

      {/* Hero Section for Winter */}
      <div className="hero">
        <img
          alt="A woman wearing a winter coat in a snowy landscape"
          src="https://storage.googleapis.com/a1aa/image/NYBgqODLtiYQJZlAwx9fcWEdAAvfG9G8hBA2dD3gUtx7cYCUA.jpg"
        />
        <div className="text">
          <h1>WINTER COLLECTION</h1>
          <button onClick={() => addToCart('Winter Collection Item')}>Add to Cart</button>
        </div>
      </div>

      {/* Spring Collection */}
      <div className="hero">
        <img
          alt="A woman wearing a spring outfit in a vibrant garden"
          src="https://storage.googleapis.com/a1aa/image/4XB5yfSGQ3XMEKLnBUhhXCpoD5dCIQz3rP2WtBSiL24mGNBKA.jpg"
        />
        <div className="text">
          <h1>SPRING COLLECTION</h1>
          <button onClick={() => addToCart('Spring Collection Item')}>Add to Cart</button>
        </div>
      </div>

      <div className="subtext">EVERYDAY APPAREL FOR EVERYONE. EVERYDAY NEW COLLECTION</div>

      {/* New In Section */}
      <div className="new-in-section">
        <h2>NEW IN</h2>
        <div className="new-in-items">
          {/* Add appropriate content here */}
        </div>
      </div>

      {/* Shop by Category */}
      <div className="category-section">
        <h2>SHOP BY CATEGORY</h2>
        <div className="categories">
          <div className="category">
            <img alt="Tops Category" src="/Tops_image.png" />
            <p>TOPS</p>
          </div>
          <div className="category">
            <img alt="Bottoms Category" src="/men_cargo_bottoms.png" />
            <p>BOTTOMS</p>
          </div>
          <div className="category">
            <img alt="Dresses Category" src="/Women_dress2.png" />
            <p>DRESSES</p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter">
        <h2>Stay Up to Date</h2>
        <p>Subscribe to our newsletter and get the latest updates and offers directly to your inbox.</p>
        <input type="email" placeholder="Enter your email address" />
        <div>
          <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
        </div>
        <button>Subscribe</button>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div>
          <h3>Quick Links</h3>
          <a href="#">Shop</a>
          <a href="#">New In</a>
          <a href="#">Tops</a>
          <a href="#">Bottoms</a>
          <a href="#">Dresses</a>
          <a href="#">Sale</a>
        </div>
        <div>
          <h3>Customer Service</h3>
          <a href="#">Contact Us</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div>
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>

      <div className="payment-methods">
        <h3>We Accept</h3>
        <img
          alt="Visa, MasterCard, PayPal"
          src="https://storage.googleapis.com/a1aa/image/yqn5L3Fge_i-K9pPqGo0gTSqKwm5pcgLtbvxdpH2Bzqibcnc6l.jpg"
        />
      </div>

      <div className="copyright">
        <p>&copy; 2024 StyleU Apparel. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Userdashboard;
