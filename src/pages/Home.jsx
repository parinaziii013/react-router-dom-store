import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="flex flex-col justify-center text-center h-[495px] p-4 border-2 border-gray-200 m-4 rounded-2xl">
      <h1 className="text-4xl p-2">Welcome to Our Website❤️</h1>
      <h2 className="text-2xl p-2">To See Our Products, Click Below</h2>
      <Link className="text-2xl p-2 underline text-blue-600" to="/products">
        Products
      </Link>
    </div>
  );
};
