import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to My React App</h1>
        <p className="text-gray-700">This is a simple React app using Tailwind CSS.</p>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
