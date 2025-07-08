import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Replace this with your actual user email logic
  const userEmail = "bioguest94@gmail.com";

  const fetchOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`http://localhost:5000/api/gmail/orders/fetch-gmail?userEmail=${encodeURIComponent(userEmail)}`);
      const data = await res.json();
      if (res.ok) {
        setOrders(data.orders || []);
      } else {
        setError("Failed to fetch orders.");
      }
    } catch (err) {
      setError("Network error."+err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {orders.length === 0 && !loading && <p>No orders found.</p>}
      <ul>
        {orders.map((order, idx) => (
          <li key={order.orderId || idx} className="mb-4 p-4 border rounded bg-white/80">
            <div><strong>Platform:</strong> {order.platform}</div>
            <div><strong>Order ID:</strong> {order.orderId}</div>
            <div><strong>Delivery Date:</strong> {order.deliveryDate}</div>
            <div><strong>Status:</strong> {order.status}</div>
            <div><strong>Items:</strong> {order.items && order.items.map(item => item.name).join(", ")}</div>
          </li>
        ))}
      </ul>
      <button
        onClick={fetchOrders}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        Refresh Orders from Gmail
      </button>
    </div>
  );
};

export default Orders;
  