import React from "react";

const statusColors = {
  Shipped: "bg-green-100 text-green-700",
  "Out for Delivery": "bg-yellow-100 text-yellow-700",
  Delivered: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
  default: "bg-gray-200 text-gray-700",
};

const Orders = ({ platform, product, price, deliveryDate, status }) => {
  const badgeColor = statusColors[status] || statusColors.default;
  return (
    <div className="bg-gradient-to-br from-black via-red-900 to-black shadow-lg rounded-xl p-5 border border-red-400 hover:shadow-xl transition-shadow duration-200">
      <h2 className="font-bold text-xl text-gray-800 mb-1">{product}</h2>
      <p className="text-indigo-500 font-semibold mb-2">{platform}</p>
      <p className="text-gray-700 text-sm mb-1">Price: <span className="font-medium">{price}</span></p>
      <p className="text-gray-700 text-sm mb-2">Delivery Date: <span className="font-medium">{deliveryDate}</span></p>
      <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full font-semibold ${badgeColor}`}>
        {status}
      </span>
    </div>
  );
};

export default Orders;
  