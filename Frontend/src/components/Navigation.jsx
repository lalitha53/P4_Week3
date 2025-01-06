import React from "react";
import "./Navigation.css"; // Add corresponding CSS for styling

function Navigation() {
  return (
    <div className="navigation-bar">
      <div className="left-links">
        <a href="/shop">Shop</a>
        <a href="/new-in">New In</a>
        <a href="/tops">Tops</a>
        <a href="/bottoms">Bottoms</a>
        <a href="/sale">Sale</a>
      </div>
    </div>
  );
}

export default Navigation;
