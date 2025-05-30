
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: "", price: "", sellerEmail: "", description: "" });

  const handleAddProduct = () => {
    if (!form.title || !form.price || !form.sellerEmail) return alert("Please fill all fields");
    const newProduct = { ...form, id: Date.now() };
    setProducts([newProduct, ...products]);
    setForm({ title: "", price: "", sellerEmail: "", description: "" });
  };

  const handleBuy = (product) => {
    const buyerEmail = prompt("Enter your email to proceed with the purchase:");
    if (!buyerEmail) return;
    const sellerEmail = product.sellerEmail;
    const amount = parseFloat(product.price);
    const commission = amount * 0.25;
    const sellerAmount = amount - commission;

    alert(
      `✅ Purchase details sent:\n- To seller: ${sellerEmail}\n- To buyer: ${buyerEmail}\n- Total price: ${amount} Pi\n- Your commission: ${commission} Pi`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Markets Pi - Buy & Sell Marketplace</h1>

      <div className="bg-white p-4 rounded shadow mb-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">➕ Add a Product</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Product name"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Price in Pi"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Seller's email"
          type="email"
          value={form.sellerEmail}
          onChange={(e) => setForm({ ...form, sellerEmail: e.target.value })}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Product description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Post Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold mb-2">Price: {product.price} Pi</p>
            <button
              onClick={() => handleBuy(product)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              🛒 Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
