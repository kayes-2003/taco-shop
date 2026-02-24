import React, { useState } from "react";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    items: [
      { type: "Crunchy", quantity: 0, price: 1.5 },
      { type: "Soft", quantity: 0, price: 2.0 },
      { type: "Chips & Salsa", quantity: 0, price: 2.0 },
    ],
    payment: "Cash",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index].quantity = parseInt(value) || 0;
    setFormData({ ...formData, items: updatedItems });
  };

  const totalPrice = formData.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order placed by ${formData.name}\n` +
        formData.items
          .filter((item) => item.quantity > 0)
          .map((item) => `${item.quantity} ${item.type}`)
          .join(", ") +
        `\nTotal: $${totalPrice.toFixed(2)}\nPayment: ${formData.payment}\nDelivery Address: ${formData.address}, ${formData.city} ${formData.zip}`
    );
  };

  return (
    <section className="order">
      <h2 className="order__title">🌮 Online Order</h2>
      <form onSubmit={handleSubmit} className="order__form">
        
        {/* Customer Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Delivery Location */}
        <h3 className="form-section">🚚 Delivery Location</h3>
        <div className="form-group">
          <label htmlFor="address">Street Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>

        {/* Items */}
        <h3 className="form-section">🍴 Select Items</h3>
        {formData.items.map((item, index) => (
          <div className="form-group" key={index}>
            <label>
              {item.type} (${item.price.toFixed(2)} each):
            </label>
            <input
              type="number"
              min="0"
              max="10"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, e.target.value)}
            />
          </div>
        ))}

        {/* Payment Method */}
        <h3 className="form-section">💳 Payment Method</h3>
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="payment"
              value="Cash"
              checked={formData.payment === "Cash"}
              onChange={handleChange}
            />
            Cash
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="payment"
              value="Card"
              checked={formData.payment === "Card"}
              onChange={handleChange}
            />
            Card
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="payment"
              value="Mobile Payment"
              checked={formData.payment === "Mobile Payment"}
              onChange={handleChange}
            />
            Mobile Payment
          </label>
        </div>

        {/* Total */}
        <h3 className="form-section">🧾 Total Price: ${totalPrice.toFixed(2)}</h3>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="submit">Place Order</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </section>
  );
}

export default Order;