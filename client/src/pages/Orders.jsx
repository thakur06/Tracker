import React, { useEffect, useState } from "react";
import { SiAmazon, SiFlipkart } from 'react-icons/si';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle, FaBoxOpen, FaCalendarAlt, FaShoppingCart, FaTruck, FaStore, FaEye, FaSearch, FaFilter } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { MdLocalShipping } from 'react-icons/md';

const platformIcons = {
  Amazon: <SiAmazon className="text-yellow-600 text-xl" />,
  Flipkart: <SiFlipkart className="text-blue-600 text-xl" />,
};

const statusIcons = {
  Delivered: <FaCheckCircle className="text-green-500 text-lg" />,
  Pending: <FaHourglassHalf className="text-yellow-500 text-lg" />,
  Cancelled: <FaTimesCircle className="text-red-500 text-lg" />,
  Shipped: <FaTruck className="text-blue-500 text-lg" />,
  Processing: <FaShoppingCart className="text-purple-500 text-lg" />,
};

const statusColors = {
  Delivered: "bg-green-900/30 text-green-400 border-green-700/40",
  Pending: "bg-yellow-900/30 text-yellow-400 border-yellow-700/40",
  Cancelled: "bg-red-900/30 text-red-400 border-red-700/40",
  Shipped: "bg-blue-900/30 text-blue-400 border-blue-700/40",
  Processing: "bg-purple-900/30 text-purple-400 border-purple-700/40",
};

// Enhanced OrderCard component
const OrderCard = ({ platform, orderId, deliveryDate, status, items, image, orderValue, trackingNumber }) => (
  <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl shadow-xl border border-red-700/30 p-6 mb-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl group">
    {/* Platform Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-black/60 border border-red-700/40 flex items-center justify-center">
          {platformIcons[platform] || <FaStore className="text-red-400 text-xl" />}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{platform}</h3>
          <p className="text-gray-400 text-sm">Order #{orderId}</p>
        </div>
      </div>
      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[status] || statusColors.Pending}`}>
        <span className="flex items-center gap-1">
          {statusIcons[status] || statusIcons.Pending}
          {status}
        </span>
      </div>
    </div>

    {/* Order Details Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      <div className="bg-black/60 border border-red-700/40 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          <FaCalendarAlt className="text-red-400" />
          <span className="text-gray-400 text-sm">Delivery Date</span>
        </div>
        <p className="text-white font-medium">{deliveryDate}</p>
      </div>
      
      <div className="bg-black/60 border border-red-700/40 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          <FaBoxOpen className="text-red-400" />
          <span className="text-gray-400 text-sm">Items</span>
        </div>
        <p className="text-white font-medium">{items}</p>
      </div>

      {orderValue && (
        <div className="bg-black/60 border border-red-700/40 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <FaShoppingCart className="text-red-400" />
            <span className="text-gray-400 text-sm">Order Value</span>
          </div>
          <p className="text-white font-medium">₹{orderValue}</p>
        </div>
      )}

      {trackingNumber && (
        <div className="bg-black/60 border border-red-700/40 rounded-lg p-3 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-1">
            <MdLocalShipping className="text-red-400" />
            <span className="text-gray-400 text-sm">Tracking</span>
          </div>
          <p className="text-white font-medium font-mono text-sm">{trackingNumber}</p>
        </div>
      )}
    </div>

    {/* Product Image */}
    {image && (
      <div className="mb-4">
        <img 
          src={image} 
          alt={platform} 
          className="w-full h-48 object-cover rounded-lg border border-red-700/40" 
        />
      </div>
    )}

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-3">
      <button className="flex-1 bg-red-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
        <FaEye />
        View Details
      </button>
      <button className="flex-1 bg-black/60 border border-red-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 hover:border-red-600 transition-colors flex items-center justify-center gap-2">
        <FaTruck />
        Track Order
      </button>
    </div>
  </div>
);

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

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
      setError("Network error: " + err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.platform?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 sm:p-8 min-h-screen bg-gradient-to-br from-black via-red-900 to-black">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <FaBoxOpen className="text-red-400" />
          Your Orders
        </h1>
        <p className="text-gray-300">Track and manage all your online orders in one place</p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders, platforms, or items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-black/60 border border-red-700/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
          />
        </div>
        
        <div className="relative">
          <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="pl-10 pr-8 py-3 bg-black/60 border border-red-700/40 rounded-lg text-white focus:outline-none focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20 appearance-none cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Delivered">Delivered</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Processing">Processing</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Refresh Button */}
      <div className="mb-6">
        <button
          onClick={fetchOrders}
          className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center gap-2 disabled:opacity-50"
          disabled={loading}
        >
          <FiRefreshCw className={`${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Refreshing...' : 'Refresh Orders from Gmail'}
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mb-4"></div>
          <p className="text-gray-300">Loading orders...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-900/30 border border-red-700/40 rounded-lg p-4 mb-6">
          <p className="text-red-400 flex items-center gap-2">
            <FaTimesCircle />
            {error}
          </p>
        </div>
      )}

      {/* Orders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Demo Order Card */}
        <OrderCard
          platform="Amazon"
          orderId="AMZ123456789"
          deliveryDate="2024-07-10"
          status="Delivered"
          items="Echo Dot, Fire Stick"
          orderValue="2,999"
          trackingNumber="1Z999AA1234567890"
          image="https://images-na.ssl-images-amazon.com/images/I/61d5F4YB6NL._AC_SL1000_.jpg"
        />

        {/* Dynamic Orders */}
        {filteredOrders.map((order, idx) => (
          <OrderCard
            key={order.orderId || idx}
            platform={order.platform}
            orderId={order.orderId}
            deliveryDate={order.deliveryDate}
            status={order.status}
            items={order.items && order.items.map(item => item.name).join(", ")}
            orderValue={order.orderValue}
            trackingNumber={order.trackingNumber}
            image={order.image}
          />
        ))}
      </div>

      {/* Empty State */}
      {orders.length === 0 && !loading && (
        <div className="text-center py-12">
          <FaBoxOpen className="text-gray-600 text-6xl mb-4 mx-auto" />
          <h3 className="text-white text-xl font-semibold mb-2">No orders found</h3>
          <p className="text-gray-400 mb-6">Connect your Gmail account to start tracking your orders automatically</p>
          <button
            onClick={fetchOrders}
            className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center gap-2 mx-auto"
          >
            <FiRefreshCw />
            Refresh Orders
          </button>
        </div>
      )}

      {/* No Results State */}
      {filteredOrders.length === 0 && orders.length > 0 && !loading && (
        <div className="text-center py-12">
          <FaSearch className="text-gray-600 text-6xl mb-4 mx-auto" />
          <h3 className="text-white text-xl font-semibold mb-2">No matching orders</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Orders;