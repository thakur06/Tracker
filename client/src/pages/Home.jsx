import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import Order from "../components/Order";
import Testimonials from "../components/Testimonials";
const orders = [
  {
    platform: "Amazon",
    product: "Apple AirPods Pro",
    price: "₹19,990",
    deliveryDate: "2025-07-02",
    status: "Shipped",
  },
  {
    platform: "Flipkart",
    product: "Nike Shoes",
    price: "₹5,499",
    deliveryDate: "2025-07-01",
    status: "Out for Delivery",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Hero Section */}
      <Hero/>
      

      {/* Testimonials Section */}
      <Integrations/>
      <Testimonials />

      <h1 className="text-2xl font-bold mb-4" id="orders">Your Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order, index) => (
          <Order key={index} {...order} />
        ))}
      </div>
    </div>
  );
};

export default Home; 