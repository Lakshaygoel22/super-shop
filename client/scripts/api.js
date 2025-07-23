// client/scripts/api.js
const API_URL = "http://localhost:5000/api";

// Example local product data with ratings
async function fetchProducts() {
  return [
    {
      _id: "1",
      name: "Wireless Headphones",
      price: 2499,
      image: "assets/images/headphones.jpg",
      rating: 4.8,
      description: "Premium sound with long battery life.",
    },
    {
      _id: "2",
      name: "Smart Watch",
      price: 3999,
      image: "assets/images/smart_watch.jpg",
      rating: 4.4,
      description: "Track your health, messages, and workouts.",
    },
    {
      _id: "3",
      name: "Running Shoes",
      price: 2199,
      image: "assets/images/shoes.jpg",
      rating: 4.6,
      description: "Perfect comfort for everyday runners.",
    },
    {
      _id: "4",
      name: "Leather Jacket",
      price: 6499,
      image: "assets/images/jacket.jpg",
      rating: 4.9,
      description: "Timeless fashion made with genuine materials.",
    },
  ];
}
