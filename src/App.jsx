

const menuItems = {
  m1: { description: "Chicken Fried Rice", name: "FriedRice", price: 150.0 },
  m2: { description: "Mutton Briyani", name: "Briyani", price: 175.0 },
  m3: { description: "Idly with Vada", name: "Idly", price: 50.0 },
  m4: { description: "Dosai with potato masala", name: "Dosai", price: 55.0 },
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Menu</h1>
        <ul className="space-y-4">
          {Object.entries(menuItems).map(([key, item]) => (
            <li key={key} className="flex flex-col p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                <p className="text-sm text-gray-500 italic">{item.description}</p>
              </div>
              <span className="text-orange-600 font-medium">₹{item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
